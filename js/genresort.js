var songs = [
  { artist: 'Peter A', genre: 'RocknRock', song: 'ABC', price: '1.99ETH', photo: './album/1.jpg',location:'Duck cafe', type:'rocknroll' },
  { artist: 'Peter B', genre: 'Blues', song: 'CDE', price: '5.99ETH', photo: './album/2.jpg' ,location:'Mouse', type:'blues'},
  { artist: 'Peter C', genre: 'Blues', song: 'EFG', price: '15.99ETH', photo: './album/3.jpg' ,location:'Dolphin cafe', type:'blues'},
  { artist: 'Peter D', genre: 'Pop', song: 'HIJ', price: '2.99ETH', photo: './album/4.jpg' ,location:'Lobster cafe', type:'pop'},
  { artist: 'Mary A', genre: 'Jazz', song: 'QWE', price: '5.99ETH', photo: './album/5.jpg' ,location:'Oyster cafe' , type:'jazz'},
  { artist: 'Mary B', genre: 'Pop', song: 'RTY', price: '8.99ETH', photo: './album/6.jpg',location:'Shrimp cafe', type:'pop' },
  { artist: 'Mary C', genre: 'RocknRock', song: 'gfg', price: '2.99ETH', photo: './album/7.jpg' ,location:'Frog cafe', type:'rocknroll'},
  { artist: 'Mary D', genre: 'Jazz', song: 'vnn', price: '2.99ETH', photo: './album/8.jpg',location:'Bear cafe', type:'jazz' },
  { artist: 'May A', genre: 'Blues', song: 'nnv', price: '15.99ETH', photo: './album/9.jpg' ,location:'Owl cafe', type:'blues'},
  { artist: 'May B', genre: 'RocknRock', song: 'fdr', price: '5.99ETH', photo: './album/10.jpg',location:'Cat cafe' , type:'rocknroll'},
  { artist: 'May C', genre: 'Pop', song: 'htdf', price: '8.99ETH', photo: './album/11.jpg',location:'Dog cafe', type:'pop' },
  { artist: 'May D', genre: 'Pop', song: 'fhg', price: '2.99ETH', photo: './album/12.jpg',location:'Bird cafe' , type:'pop'},
  { artist: 'John A', genre: 'Blues', song: 'fgh', price: '5.99ETH', photo: './album/13.jpg' ,location:'Tiger cafe', type:'blues'},
  { artist: 'John B', genre: 'RocknRock', song: 'fgh', price: '2.99ETH', photo: './album/14.jpg',location:'Lion cafe', type:'rocknroll' },
  { artist: 'John C', genre: 'RocknRock', song: 'rty', price: '15.99ETH', photo: './album/15.jpg' ,location:'Elephant cafe', type:'rocknroll'},
  { artist: 'John D', genre: 'Jazz', song: 'iuy', price: '5.99ETH', photo: './album/16.jpg' ,location:'Rabbit cafe', type:'jazz'},
  { artist: 'Chris A', genre: 'Pop', song: 'jkl', price: '8.99ETH', photo: './album/17.jpg' ,location:'Hamster cafe', type:'pop'},
  { artist: 'Chris B', genre: 'Blues', song: 'msd', price: '2.99ETH', photo: './album/18.jpg',location:'Fish cafe' , type:'blues'},
  { artist: 'Chris C', genre: 'Jazz', song: 'bmn', price: '8.99ETH', photo: './album/19.jpg',location:'Butterfly cafe', type:'jazz' },
  { artist: 'Chris D', genre: 'Jazz', song: 'try', price: '15.99ETH', photo: './album/20.jpg',location:'Bee cafe' , type:'jazz'}
];


document.addEventListener('DOMContentLoaded', function() {
    var type = getGenreFromURL();
  

    var filteredSongs = songs.filter(function(song) {
      return song.type === type;
    });
  

    displaySongs(filteredSongs);
  });
  
  function getGenreFromURL() {
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