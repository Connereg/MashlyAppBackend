class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index   
        render json: User.all, status: :ok
    end

    def show
        pagwOwner = User.find(params[:id])
        render json: pagwOwner, status: :ok
    end

    def destroy
        user_to_destroy = User.find(params[:id])
        user_to_destroy.destroy
        head :no_content
    end

    def user_login
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :profile_picture)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end

end
