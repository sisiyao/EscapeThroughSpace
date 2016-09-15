import Maze from './maze';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const wrapper = document.getElementById('wrapper');
  canvas.width = 1000;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");
  const maze = new Maze(level, ctx, canvas.width, canvas.height, wrapper);
  maze.drawMaze();
  maze.start();
  Mousetrap.bind("enter", removeSplash.bind(null, ctx, canvas, wrapper, maze));
});

let level = 1;

function removeSplash (ctx, canvas, wrapper, maze) {
  console.log("here");
  const splashes = document.querySelectorAll('.splash');
  splashes.forEach(splash => {
    splash.style.visibility = "hidden";
  });
  maze.bindKeys();
  Mousetrap.unbind("enter");
}
