describe SeoChecker, vcr: true do
  let(:url) { 'https://www.pluginseo.com/' }
  let(:service) { SeoChecker.new url }
  let(:result) { service.perform }

  it do
    expect(result).to eq ''
  end
end
