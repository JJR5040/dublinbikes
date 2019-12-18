function searchFor(){
    var searchBar = document.getElementById("search_for");

    if (searchBar.value.toLowerCase() === 'join'){
        window.open('join.html');
    } else if (searchBar.value.toLowerCase() === 'home'){
        window.open('home.html');
    } else if (searchBar.value.toLowerCase() === 'contact'){
        window.open('contact.html');
    } else if (searchBar.value.toLowerCase() === 'faq'){
        window.open('faq.html');
    } else if (searchBar.value.toLowerCase() === 'news'){
        window.open('news.html');
    } else if (searchBar.value.toLowerCase() === 'stations'){
        window.open('stations.html');
    } else{
        window.alert("No search results found");
    }
}