var songs = [
    { artist: 'Peter A', genre: 'RocknRock', song: 'ABC', price: '1.99ETH', photo: '../album/1.jpg',location:'Duck cafe', type:'peterA' },
    { artist: 'Peter B', genre: 'Blues', song: 'CDE', price: '5.99ETH', photo: '../album/2.jpg' ,location:'Mouse', type:'peterB'},
    { artist: 'Peter C', genre: 'Blues', song: 'EFG', price: '15.99ETH', photo: '../album/3.jpg' ,location:'Dolphin cafe', type:'peterC'},
    { artist: 'Peter D', genre: 'Pop', song: 'HIJ', price: '2.99ETH', photo: '../album/4.jpg' ,location:'Lobster cafe', type:'peterD'},
    { artist: 'Peter D', genre: 'Jazz', song: 'QWE', price: '5.99ETH', photo: '../album/5.jpg' ,location:'Oyster cafe' , type:'peterD'},
    { artist: 'Peter B', genre: 'Pop', song: 'RTY', price: '8.99ETH', photo: '../album/6.jpg',location:'Shrimp cafe', type:'peterB' },
    { artist: 'Peter C', genre: 'RocknRock', song: 'gfg', price: '2.99ETH', photo: '../album/7.jpg' ,location:'Frog cafe', type:'peterC'},
    { artist: 'Peter A', genre: 'Jazz', song: 'vnn', price: '2.99ETH', photo: '../album/8.jpg',location:'Bear cafe', type:'peterA' },
    { artist: 'Peter B', genre: 'Blues', song: 'nnv', price: '15.99ETH', photo: '../album/9.jpg' ,location:'Owl cafe', type:'peterB'},
    { artist: 'Peter D', genre: 'RocknRock', song: 'fdr', price: '5.99ETH', photo: '../album/10.jpg',location:'Cat cafe' , type:'peterD'},
    { artist: 'Peter D', genre: 'Pop', song: 'htdf', price: '8.99ETH', photo: '../album/11.jpg',location:'Dog cafe', type:'peterD' },
    { artist: 'Peter A', genre: 'Pop', song: 'fhg', price: '2.99ETH', photo: '../album/12.jpg',location:'Bird cafe' , type:'peterA'},
    { artist: 'Peter B', genre: 'Blues', song: 'fgh', price: '5.99ETH', photo: '../album/13.jpg' ,location:'Tiger cafe', type:'peterB'},
    { artist: 'Peter D', genre: 'RocknRock', song: 'fgh', price: '2.99ETH', photo: '../album/14.jpg',location:'Lion cafe', type:'peterD' },
    { artist: 'Peter C', genre: 'RocknRock', song: 'rty', price: '15.99ETH', photo: '../album/15.jpg' ,location:'Elephant cafe', type:'peterC'},
    { artist: 'Peter B', genre: 'Jazz', song: 'iuy', price: '5.99ETH', photo: '../album/16.jpg' ,location:'Rabbit cafe', type:'peterB'},
    { artist: 'Peter A', genre: 'Pop', song: 'jkl', price: '8.99ETH', photo: '../album/17.jpg' ,location:'Hamster cafe', type:'peterA'},
    { artist: 'Peter C', genre: 'Blues', song: 'msd', price: '2.99ETH', photo: '../album/18.jpg',location:'Fish cafe' , type:'peterC'},
    { artist: 'Peter A', genre: 'Jazz', song: 'bmn', price: '8.99ETH', photo: '../album/19.jpg',location:'Butterfly cafe', type:'peterA' },
    { artist: 'Peter B', genre: 'Jazz', song: 'try', price: '15.99ETH', photo: '../album/20.jpg',location:'Bee cafe' , type:'peterB'}
  ];


document.addEventListener('DOMContentLoaded', function() {
    var type = getArtistFromURL();
  

    var filteredSongs = songs.filter(function(song) {
      return song.type === type;
    });
  

    displaySongs(filteredSongs);
  });
  
  function getArtistFromURL() {
    var url = window.location.href;
    var type = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.html'));
    return type;
  }
  
  function displaySongs(songs) {
    var container = document.getElementById('songContainer');
  
    container.innerHTML = '';
  
    songs.forEach(function(song) {
  
      var songElement = document.createElement('div');
      songElement.classList.add('song');
  
      var photoElement = document.createElement('img');
      photoElement.src = song.photo;
      songElement.appendChild(photoElement);
      photoElement.classList.add('song-photo');
  
      var detailsElement = document.createElement('div');
      detailsElement.classList.add('song-details');
  
      var nameElement = document.createElement('span');
      nameElement.textContent = 'Song: ' + song.song;
      detailsElement.appendChild(nameElement);
  
      var artistElement = document.createElement('p');
      artistElement.textContent = 'Artist: ' + song.artist;
      detailsElement.appendChild(artistElement);

      var genreElement = document.createElement('span');
      genreElement.textContent = 'Genre: ' + song.genre;
      detailsElement.appendChild(genreElement);
  
      var priceElement = document.createElement('p');
      priceElement.textContent = 'Price: $' + song.price;
      detailsElement.appendChild(priceElement);

      var locationElement = document.createElement('p');
      locationElement.textContent = 'Location: ' + song.location;
      detailsElement.appendChild(locationElement);

      var addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.classList.add('add-to-cart-button');
      detailsElement.appendChild(addToCartButton);
  
      songElement.appendChild(detailsElement);
  
      container.appendChild(songElement);
    });
  }