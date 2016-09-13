import Maze from './maze';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 1000;
  canvas.height = 600;

  const ctx = canvas.getContext("2d");
  const maze = new Maze(1, ctx, canvas.width, canvas.height);
  maze.start();
});
