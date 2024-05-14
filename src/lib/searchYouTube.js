import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data);
      console.log('sucess', data);
    },
    error: function(data) {
      console.error('Failed', data);
    }
  });
};

export default searchYouTube;
