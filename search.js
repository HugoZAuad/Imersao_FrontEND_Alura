const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
  resultPlaylist.classList.add("hidden");

  // Esconde todos os elementos inicialmente
  const allArtists = document.querySelectorAll('.artist');
  allArtists.forEach(artist => {
    artist.classList.add('hidden');
  });

  // Mostra apenas os resultados que correspondem ao termo de pesquisa
  const matchingArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));
  if (matchingArtists.length > 0) {
    matchingArtists.forEach(matchingArtist => {
      const artistElement = document.querySelector(`.artist[data-name="${matchingArtist.name.toLowerCase()}"]`);
      if (artistElement) {
        artistElement.classList.remove('hidden');
        const artistImg = artistElement.querySelector('.artist-img');
        artistImg.src = matchingArtist.urlImg;
      }
    });
    resultArtist.classList.remove('hidden');
  } else {
    resultArtist.classList.add('hidden');
  }
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});