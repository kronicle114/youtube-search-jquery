const API_KEY='AIzaSyArYMiOMrWPzhMdE6hPIfSiRl5Xv9YNbKQ'
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

const getDataFromAPI = (searchTerm, callback) => {
    const query = {
        'part': 'snippet', 
        'key': `${API_KEY}`,
        'q': `${searchTerm}`,
        'type': 'video',
        'maxResults': 5
    }

    $.getJSON(YOUTUBE_SEARCH_URL, query, callback)
    
}

const renderResult = (result, index) => {
   console.log('result: ', result)
    return `
    <li id=${index}>
      <h2>${result.snippet.title}</h2>
      <p>By: ${result.snippet.channelTitle}</p>
      <a aria-label="${result.snippet.title}" role="link" href="https://www.youtube.com/watch?v=${result.id.videoId}">
      <img src="${result.snippet.thumbnails.medium.url}" alt="${result.snippet.title}"></a>
    </li>
  `;
}

const displayYoutubeSearchData = (data) => {
    const results= data.items.map( (item, index) => renderResult(item, index))
    // append data to an existing ul
    $('.js_search_results').prepend(results);
}

const watchSubmit = () => {
    $('.js_search_form').on('submit', event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.search_box')
        const searchTerm = queryTarget.val();
        // clear out the input
        queryTarget.val('');
        getDataFromAPI(searchTerm, displayYoutubeSearchData)
        console.log('fin')
    })
}

$(watchSubmit) // when the page loads, call this fn