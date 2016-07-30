class HomeController < ApplicationController
  def index
  end

  def fetch_data
    url = params[:url]
    seo_cheker = SeoChecker.new url
    resp, status = seo_cheker.perform
    render json: resp, status: status
  end
end
