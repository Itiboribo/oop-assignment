class Song {
    constructor(title, artist, duration){
      this.title = title;
      this.artist = artist;
      this.duration = duration;
    }
    
    displayInfo(){
      return `${this.title} is composed by ${this.artist} and it has total duration of ${this.duration} minutes`;
    }
  }
  
  class Playlist {
     constructor(name, songs){
      this.name = name;
      this.songs = [];
    }
    addSong(song){
      this.songs.push(song);
    }
    // just for bonus mark, we added remove song method
    removeSong(song){
      this.songs = this.songs.filter(item => item !== song);
    }
  }
  
  class User{
    constructor(name, playlists){
      this.name = name;
      this.playlists = [];
    }
    createPlaylist(playlist){
      this.playlists.push(playlist);
    }
  }
  
  // Define the Program class
  // just as def main in python to create some instances and simulate the classes 
  
  class Program {
    static run() {
      // create a user 
      const user1 = new User("Peter");
      // initialise some songs object
      const song1 = new Song('calmdown','Rema', 4);
      const song2 = new Song('amapiano','TerryG', 3);
      const song3 = new Song('alobam','phyno', 5);
      
      //initialise the playlist
      const playlist1 = new Playlist("Afrobeat");
      
      // Simulate adding songs to playlists
      playlist1.addSong(song1);
      playlist1.addSong(song3);
      
      // Simulate creating user-specific playlists
      user1.createPlaylist(playlist1);
      
      console.log("User 1 playlists:", user1.playlists);
    }
  }
  Program.run();
  