import Maze from './maze';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const wrapper = document.getElementById('wrapper');
  canvas.width = 1000;
  canvas.height = 600;

  const ctx = canvas.getContext("2d");
  const maze = new Maze(1, ctx, canvas.width, canvas.height, wrapper);
  maze.drawMaze();
  // wrapper.scrollTop = 640;
  // wrapper.scrollLeft = 270;
  maze.start();
});
