class UserSubmissionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index  
        render json: UserSubmission.all, status: :ok
    end

    private

    def user_params
        params.permit()
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end

end
