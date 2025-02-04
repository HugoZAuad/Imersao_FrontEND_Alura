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
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  // Esconde todos os elementos inicialmente
  const allArtists = document.querySelectorAll('.artist');
  allArtists.forEach(artist => {
    artist.classList.add('hidden');
  });

  // Mostra apenas o resultado que corresponde ao termo de pesquisa
  const matchingArtist = result.find(artist => artist.name.toLowerCase() === searchTerm);
  if (matchingArtist) {
    artistName.innerText = matchingArtist.name;
    artistImage.src = matchingArtist.urlImg;

    const artistElement = document.querySelector(`.artist[data-name="${matchingArtist.name.toLowerCase()}"]`);
    if (artistElement) {
      artistElement.classList.remove('hidden');
    }
  } else {
    artistName.innerText = '';
    artistImage.src = '';
  }

  resultArtist.classList.remove('hidden');
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtist.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});