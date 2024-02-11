var artists = [
    { name: 'Peter A', photo: './album/1.jpg' , page: "../melodia/artistpage/peterA.html" },
    { name: 'Peter B',  photo: './album/2.jpg', page: "../melodia/artistpage/peterB.html" },
    { name: 'Peter C',  photo: './album/3.jpg', page: "../melodia/artistpage/peterC.html"  },
    { name: 'Peter D',  photo: './album/4.jpg', page: "../melodia/artistpage/peterD.html" }
  ];
  
  var artistGallery = document.querySelector('.artist-gallery');

  // Loop through the artists and create artist items
  for (var i = 0; i < artists.length; i++) {
    var artist = artists[i];
  
    // Create the artist item div
    var artistItem = document.createElement('div');
    artistItem.classList.add('artist-item');
  
    // Create the anchor element for the artist page
    var artistLink = document.createElement('a');
    artistLink.href = artist.page;
  
    // Create the artist photo element
    var artistPhoto = document.createElement('img');
    artistPhoto.src = artist.photo;
    artistPhoto.alt = artist.name;
    artistPhoto.classList.add('artist-photo');
  
    // Create the artist name element
    var artistName = document.createElement('div');
    artistName.textContent = artist.name;
    artistName.classList.add('artist-name');
  
    // Append the photo and name to the anchor element
    artistLink.appendChild(artistPhoto);
    artistLink.appendChild(artistName);
  
    // Append the anchor element to the artist item
    artistItem.appendChild(artistLink);
  
    // Append the artist item to the gallery container
    artistGallery.appendChild(artistItem);
  }