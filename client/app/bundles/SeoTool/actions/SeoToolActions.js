import alt from '../alt';

class SeoToolActions {
  fetchData(url, site) {
    $.ajax({
      method: 'POST',
      url: url,
      data: { url: site },
      success: (data) => {
        this.processData(data);
      }
    });
  }

  validateUrl(url) {
    return url;
  }

  processData(data) {
    return data;
  }
}

export default alt.createActions(SeoToolActions);

