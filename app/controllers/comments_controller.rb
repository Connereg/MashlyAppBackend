class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show, :destroy]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Comment.all, status: :ok
    end

    def create 
        new_comment = Comment.new(comment_params)
        new_comment.save!
        render json: new_comment, status: :created
    end


    def show  
        specific_mashup = Mashup.find(params[:id])
        comments_result = Comment.where(mashup_id: specific_mashup.id)
        render json: comments_result, status: :ok
    end

    def destroy
        comment_to_destroy = Comment.find(params[:id])
        comment_to_destroy.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:content, :user_id, :mashup_id)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
