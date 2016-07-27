class HomeController < ApplicationController
  def index
    @hello_world_props = { name: "UrlForm" }
  end
end
