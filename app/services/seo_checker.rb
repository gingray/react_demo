class SeoChecker
  URL = "https://www.pluginseo.com/api/developertest/seoproblems/result?u=%s&format=json"
  def initialize url
    @url = url
  end

  def perform
    data = client @url
    data
  end

  private

  def client url
    uri = URI(url)
    conn = Faraday.new(url: URL % uri.host) do |faraday|
      faraday.adapter Faraday.default_adapter
      faraday.response :json
    end
    resp = conn.get
    resp.body
  end
end
