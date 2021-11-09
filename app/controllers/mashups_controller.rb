class MashupsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :profile_mashups]  
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
        owner = User.find(params[:id])
        profile_mashups_result = Mashup.where(user_id: owner.id)
        render json: profile_mashups_result, status: :ok
    end

    private

    def mashup_params
        params.permit(:youtubeurl1, :youtubeurl2, :user_id, :title, :category, :user)
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error: "Mashup Not Found"}, status: :not_found
    end
end
