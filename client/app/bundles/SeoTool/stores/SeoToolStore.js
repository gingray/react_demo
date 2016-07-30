import SeoToolActions from '../actions/SeoToolActions';
import alt from '../alt';
import _ from 'lodash';


class SeoToolStore {
  constructor() {
    this.url = '';
    this.response = {};
    this.bindActions(SeoToolActions);
  }

  onValidateUrl(url) {
    this.url = url;
  }

  onProcessData(data) {
    this.response = data;
    console.log(this.response);
  }
}

export default alt.createStore(SeoToolStore, 'SeoToolStore');


