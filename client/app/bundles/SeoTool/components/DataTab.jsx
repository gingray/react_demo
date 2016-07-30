import React, { PropTypes } from 'react';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {Tabs, Tab} from 'material-ui/Tabs';


export default class DataTab extends React.Component {

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
      <Tabs>
        <Tab label={"HEADING"}>
        </Tab>
        <Tab label={"SUBHEADINGS"}>
        </Tab>
        <Tab label={"IMAGES"}>
        </Tab>
        <Tab label={"PAGE TITLE"}>
        </Tab>
        <Tab label={"FILENAMES"}>
        </Tab>
        <Tab label={"INTERNAL LINKS"}>
        </Tab>
        <Tab label={"META DESCRIPTION"}>
        </Tab>
      </Tabs>
    );
  }
}


