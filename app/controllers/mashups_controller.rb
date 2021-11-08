class MashupsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Mashup.all, status: :ok
    end

    def create
        new_mashup = Mashup.create!(mashup_params)
        render json: new_mashup, status: :ok
    end

    private

    def mashup_params
        params.permit(:youtubeurl1, :youtubeurl2)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end

end
