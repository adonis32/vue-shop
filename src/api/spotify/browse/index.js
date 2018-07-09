import request from './../request'

export default {
  getNewReleases(offset = 0, limit = 50, country) {
    return request.get('browse/new-releases', {
      params: {
        limit,
        offset,
        country
      }
    });
  },

  getCategories(offset = 0, limit = 50, country, locale) {
    return request.get('browse/categories', {
      params: {
        limit,
        offset,
        country,
        locale
      }
    });
  }
};
