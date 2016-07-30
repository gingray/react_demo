import SeoToolActions from '../actions/SeoToolActions';
import alt from '../alt';

class SeoToolStore {
  constructor() {
    this.url = '';
    this.resp = {}
    this.bindActions(SeoToolActions);
  }

  onValidateUrl(url) {
    this.url = url
  }

  onProcessData(data) {
    this.resp = data
  }
}

export default alt.createStore(SeoToolStore, 'SeoToolStore');


