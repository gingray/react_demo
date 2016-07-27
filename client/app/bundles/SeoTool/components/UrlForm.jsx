import React, { PropTypes } from 'react';
import _ from 'lodash';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class UrlForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    const muiTheme = getMuiTheme(Theme);
    return { muiTheme: muiTheme };
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <TextField hintText="Input url" fullWidth={true}  />
        <div>
          <FlatButton label="Fetch data" primary={true}/>
        </div>
      </div>
    );
  }
}
