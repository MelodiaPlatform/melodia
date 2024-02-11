var genres = [
    { name: 'Jazz', photo: './album/4.jpg' , page: "../melodia/genrepage/jazz.html" },
    { name: 'Blues',  photo: './album/5.jpg', page: "../melodia/genrepage/blues.html" },
    { name: 'RocknRoll',  photo: './album/6.jpg', page: "../melodia/genrepage/rocknroll.html"  },
    { name: 'Pop',  photo: './album/7.jpg', page: "../melodia/genrepage/pop.html" }
  ];
  
  var genreGallery = document.querySelector('.genre-gallery');

  // Loop through the genres and create genre items
  for (var i = 0; i < genres.length; i++) {
    var genre = genres[i];
  
    // Create the genre item div
    var genreItem = document.createElement('div');
    genreItem.classList.add('genre-item');
  
    // Create the anchor element for the genre page
    var genreLink = document.createElement('a');
    genreLink.href = genre.page;
  
    // Create the genre photo element
    var genrePhoto = document.createElement('img');
    genrePhoto.src = genre.photo;
    genrePhoto.alt = genre.name;
    genrePhoto.classList.add('genre-photo');
  
    // Create the genre name element
    var genreName = document.createElement('div');
    genreName.textContent = genre.name;
    genreName.classList.add('genre-name');
  
    // Append the photo and name to the anchor element
    genreLink.appendChild(genrePhoto);
    genreLink.appendChild(genreName);
  
    // Append the anchor element to the genre item
    genreItem.appendChild(genreLink);
  
    // Append the genre item to the gallery container
    genreGallery.appendChild(genreItem);
  }