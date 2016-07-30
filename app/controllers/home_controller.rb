class HomeController < ApplicationController
  def index
  end

  def fetch_data
    url = params[:url]
    seo_cheker = SeoChecker.new url
    resp = seo_cheker.perform
    render json: resp
  end
end
