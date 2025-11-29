//Abstraction - Idea & Implementation
//In TypeScript, you can achieve abstraction in two primary ways:
// using interfaces and abstract classes.

//using interfaces
//idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }
//implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing music...");
//   }
//   pause() {
//     console.log("Music is paused ⏸️");
//   }
//   stop() {
//     console.log("Music stopped.");
//   }
// }
// const audioPlayer = new MusicPlayer();
// audioPlayer.play();
// audioPlayer.pause();
// audioPlayer.stop();

//using abstract class
//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
//implementation
class MusicPlayer extends MediaPlayer {
  play(): void {
    console.log("Playing music...");
  }
  pause(): void {
    console.log("Music is paused ⏸️");
  }
  stop(): void {
    console.log("Music stopped.");
  }
}
const audioPlayer = new MusicPlayer();
audioPlayer.play();
audioPlayer.pause();
audioPlayer.stop();
