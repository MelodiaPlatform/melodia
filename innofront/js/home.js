// Define an array of songs with artist name, genre, song name, price, and album photo
var songs = [
    { artist: 'Peter A', genre: 'RocknRock', song: 'ABC', price: '1.99ETH', photo: './album/1.jpg' },
    { artist: 'Peter B', genre: 'Blues', song: 'CDE', price: '5.99ETH', photo: './album/2.jpg' },
    { artist: 'Peter C', genre: 'Blues', song: 'EFG', price: '15.99ETH', photo: './album/3.jpg' },
    { artist: 'Peter D', genre: 'Pop', song: 'HIJ', price: '2.99ETH', photo: './album/4.jpg' },
    { artist: 'Mary A', genre: 'Jazz', song: 'QWE', price: '5.99ETH', photo: './album/5.jpg' },
    { artist: 'Mary B', genre: 'Pop', song: 'RTY', price: '8.99ETH', photo: './album/6.jpg' },
    { artist: 'Mary C', genre: 'RocknRock', song: 'gfg', price: '2.99ETH', photo: './album/7.jpg' },
    { artist: 'Mary D', genre: 'Jazz', song: 'vnn', price: '2.99ETH', photo: './album/8.jpg' },
    { artist: 'May A', genre: 'Blues', song: 'nnv', price: '15.99ETH', photo: './album/9.jpg' },
    { artist: 'May B', genre: 'RocknRock', song: 'fdr', price: '5.99ETH', photo: './album/10.jpg' },
    { artist: 'May C', genre: 'Pop', song: 'htdf', price: '8.99ETH', photo: './album/11.jpg' },
    { artist: 'May D', genre: 'Pop', song: 'fhg', price: '2.99ETH', photo: './album/12.jpg' },
    { artist: 'John A', genre: 'Blues', song: 'fgh', price: '5.99ETH', photo: './album/13.jpg' },
    { artist: 'John B', genre: 'RocknRock', song: 'fgh', price: '2.99ETH', photo: './album/14.jpg' },
    { artist: 'John C', genre: 'RocknRock', song: 'rty', price: '15.99ETH', photo: './album/15.jpg' },
    { artist: 'John D', genre: 'Jazz', song: 'iuy', price: '5.99ETH', photo: './album/16.jpg' },
    { artist: 'Chris A', genre: 'Pop', song: 'jkl', price: '8.99ETH', photo: './album/17.jpg' },
    { artist: 'Chris B', genre: 'Blues', song: 'msd', price: '2.99ETH', photo: './album/18.jpg' },
    { artist: 'Chris C', genre: 'Jazz', song: 'bmn', price: '8.99ETH', photo: './album/19.jpg' },
    { artist: 'Chris D', genre: 'Jazz', song: 'try', price: '15.99ETH', photo: './album/20.jpg' }
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = getRandomNumber(0, i);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  var shuffledSongs = shuffleArray(songs);
  
  var top10Songs = shuffledSongs.slice(0, 10);
  
  var topSongsList = document.getElementById('topSongsList');
  
  for (var i = 0; i < top10Songs.length; i++) {
    var song = top10Songs[i];
  
    var listItem = document.createElement('li');
    listItem.classList.add('song-item');
  
    var albumPhoto = document.createElement('img');
    albumPhoto.src = song.photo;
    albumPhoto.classList.add('album-photo');
  
    var songInfo = document.createElement('div');
    songInfo.classList.add('song-details');
  
    var artistSpan = document.createElement('span');
    artistSpan.textContent = 'Artist: ' + song.artist;
  
    var genreSpan = document.createElement('span');
    genreSpan.textContent = 'Genre: ' + song.genre;
  
    var songNameSpan = document.createElement('span');
    songNameSpan.textContent = 'Song: ' + song.song;
  
    var priceSpan = document.createElement('span');
    priceSpan.textContent = 'Price: ' + song.price;
  
    songInfo.appendChild(artistSpan);
    songInfo.appendChild(genreSpan);
    songInfo.appendChild(songNameSpan);
    songInfo.appendChild(priceSpan);
  
    listItem.appendChild(albumPhoto);
    listItem.appendChild(songInfo);
  
    topSongsList.appendChild(listItem);
  }