class OmniauthController < ApplicationController

  def shopify
    puts request.env['omniauth.auth']
    redirect_to root_path
  end

  def failure
    redirect_to root_path
  end
end
