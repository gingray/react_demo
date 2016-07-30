class SeoChecker
  include ActiveModel::Validations

  validate :validate_url

  URL = "https://www.pluginseo.com/api/developertest/seoproblems/result?u=%s&format=json"
  def initialize url
    @url = url
  end

  def perform
    valid?
    data = client @url
    [parseData(data), :ok]
  rescue ActiveModel::StrictValidationFailed => e
    [{ error: @errors.full_messages }, :unprocessable_entity]
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
    errors.add :url, 'Url invalid', strict: true
  end

  def parseData data
    hash = {}
    data['checks'].each do |item|
      case item['title']
        when 'Heading'
          hash[:heading] = item['advice']
        when 'Subheadings'
          hash[:subheading] = item['advice']
        when 'Images'
          hash[:images] = item['advice']
        when 'Page title'
          hash[:page_title] = item['advice']
        when 'Filenames'
          hash[:filenames] = item['advice']
        when 'Internal links'
          hash[:internal_links] = item['advice']
        when 'META description'
          hash[:meta_description] = item['advice']
      end
    end
    hash
  end
end
