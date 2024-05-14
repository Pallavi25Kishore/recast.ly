
import searchYouTube from '../lib/searchYouTube.js';
var Search = ({list}) => {

  const searchClick = () => {
    var value = $('.form-control').val();
    searchYouTube(value, list); // passing in query value and our set videoList function
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down" onClick={searchClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
