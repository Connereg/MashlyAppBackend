class MashupsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Mashup.all, status: :ok
    end

    def create
        # user = User.find(params[:user_id])
        new_mashup = @current_user.mashups.new(mashup_params)
        new_mashup.save!
        
        render json: new_mashup, status: :ok
    end

    def show  
        specific_mashup = Mashup.find(params[:id])
        render json: specific_mashup, status: :ok
    end

    def destroy
        to_destroy = Mashup.find_by(id: params[:id])
        to_destroy.destroy
        head :no_content
    end

    def profile_mashups
        
    end

    private

    def mashup_params
        params.permit(:youtubeurl1, :youtubeurl2, :user_id, :title, :category, :user)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
