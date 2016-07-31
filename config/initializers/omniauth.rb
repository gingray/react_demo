Rails.application.config.middleware.use OmniAuth::Builder do
  provider :shopify, Rails.application.secrets.shopify_api, Rails.application.secrets.shopify_secret, scope: 'read_products,read_orders,write_content', 
                     callback_url: 'https://localhost/auth/shopify/callback',
                     redirect_uri: 'https://localhost/auth/shopify/callback'
end

