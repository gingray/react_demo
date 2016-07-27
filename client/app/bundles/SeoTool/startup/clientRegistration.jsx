import React from 'react';
import ReactOnRails from 'react-on-rails';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import UrlForm from '../components/UrlForm';

const SeoTool = (props, _railsContext) => {
   return <UrlForm {...props} />
};
ReactOnRails.register({ SeoTool });

