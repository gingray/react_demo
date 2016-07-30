import React, { PropTypes } from 'react';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {Tabs, Tab} from 'material-ui/Tabs';
import SeoToolStore from '../stores/SeoToolStore'

export default class DataTab extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = SeoToolStore.getState();
    this.onChange = this.onChange.bind(this);
    this.rawHtml = this.rawHtml.bind(this);
    
    
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

  rawHtml(html) {
    return  { __html: html };
  }

  render() {
    return (
      <Tabs>
        <Tab label={"HEADING"} >
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.heading)}>
          </div>
        </Tab>
        <Tab label={"SUBHEADINGS"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.subheading)}>
          </div>
        </Tab>
        <Tab label={"IMAGES"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.images)}>
          </div>
        </Tab>
        <Tab label={"PAGE TITLE"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.page_title)}>
          </div>
        </Tab>
        <Tab label={"FILENAMES"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.filenames)}>
          </div>
        </Tab>
        <Tab label={"INTERNAL LINKS"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.internal_links)}>
          </div>
        </Tab>
        <Tab label={"META DESCRIPTION"}>
          <div dangerouslySetInnerHTML={this.rawHtml(this.state.response.meta_description)}>
          </div>
        </Tab>
      </Tabs>
    );
  }
}


