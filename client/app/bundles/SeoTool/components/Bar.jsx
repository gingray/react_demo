import React, { PropTypes } from 'react';
import _ from 'lodash';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


export default class UrlForm extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    const muiTheme = getMuiTheme(Theme);
    return { muiTheme: muiTheme };
  }

  render() {
    const { name } = this.props;
    return (
      <AppBar title="SeoTool" iconElementRight={<FlatButton label="Auth" href={this.props.auth_url} />} >
      </AppBar>
    );
  }
}

