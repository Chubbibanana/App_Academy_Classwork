class UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            redirect_to users_url
        else
            flash[:errors] = @user.errors.full_messages
            render :new
        end
    end
    
    def show
        @user = User.find(params[:id])
        render :show
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update
            redirect_to users_url
        else
            flash[:errors] = ["Invalid user information, please try again!"]
            render :edit
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user && @user.destroy
            render :new

        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
