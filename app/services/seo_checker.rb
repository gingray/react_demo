class SeoChecker
  include ActiveRecord::Validations

  validate: validate_url

  URL = "https://www.pluginseo.com/api/developertest/seoproblems/result?u=%s&format=json"
  def initialize url
    @url = url
  end

  def perform
    data = client @url
    data
  rescue Exception => e
    { error: @errors.full_message }
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

  def validate_url
    return true if @url =~ URI::regexp
    @errors.add :url, 'Url invalid', strict: true
  end
end
