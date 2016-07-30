import React from 'react';
import "bootstrap-loader";
import ReactOnRails from 'react-on-rails';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import UrlForm from '../components/UrlForm';
import AppBar from '../components/Bar';
import DataTab from '../components/DataTab';


ReactOnRails.register({ UrlForm });
ReactOnRails.register({ AppBar });
ReactOnRails.register({ DataTab });



