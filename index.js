// const API_KEY='AIzaSyArYMiOMrWPzhMdE6hPIfSiRl5Xv9YNbKQ'

// const getDataFromAPI = (searchTerm, callback) => {

// }

// const renderResult = () => {

// }

// const displayYoutubeSearchData = () => {

// }

const watchSubmit = () => {
    $('#js_search_form').submit(event => {
        event.preventDefault();

        console.log('hahaha')
    })
}

$(watchSubmit)