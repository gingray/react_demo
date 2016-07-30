import React, { PropTypes } from 'react';
import _ from 'lodash';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SeoToolStore from '../stores/SeoToolStore'
import SeoToolActions from '../actions/SeoToolActions';


export default class UrlForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = SeoToolStore.getState();
    this.onTextInput = this.onTextInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    SeoToolStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SeoToolStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(SeoToolStore.getState());
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext() {
    const muiTheme = getMuiTheme(Theme);
    return { muiTheme: muiTheme };
  }

  onTextInput(event) {
    SeoToolActions.validateUrl(event.target.value);
  }

  onBtnClick() {
    SeoToolActions.fetchData(this.props.post_url, this.state.url);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <TextField hintText={'Enter your site'} fullWidth={true} onChange={this.onTextInput}  />
        </div>
        <div className="col-md-4">
          <FlatButton label="Check Site" primary={true} onClick={this.onBtnClick}/>
        </div>
      </div>
    );
  }
}
