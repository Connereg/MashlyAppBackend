class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Comment.all, status: :ok
    end


    def show  
        specific_mashup = Comment.find(params[:id])
        render json: specific_mashup, status: :ok
    end

    private

    def mashup_params
        params.permit(:youtubeurl1, :youtubeurl2, :user_id, :title, :user)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
