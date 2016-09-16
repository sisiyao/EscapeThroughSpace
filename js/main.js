import Maze from './maze';
import MazeView from './mazeview';
import LEVELS from './levels';

let level = 0;

document.addEventListener("DOMContentLoaded", () => {
  nextLevel ();
});

function newMaze () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const wrapper = document.getElementById('wrapper');
  canvas.width = LEVELS[level].mazeDimensions[0];
  canvas.height = LEVELS[level].mazeDimensions[1];
  const ctx = canvas.getContext("2d");
  const maze = new Maze(level, ctx, canvas.width, canvas.height, wrapper);
  return new MazeView(maze, ctx, level, nextLevel, resolveGame);
}

function nextLevel () {
  level += 1;
  const levelText = document.getElementById('level-text');
  levelText.innerHTML = LEVELS[level].levelText;
  const levelSplash = document.getElementById('level-splash');
  levelSplash.style.visibility = "visible";
  const maze = newMaze();
  maze.drawMaze();
  maze.start();
  Mousetrap.bind("enter", removeSplash.bind(null, maze));
}

function resolveGame (result) {
  level = result === 'win' ? 0 : level - 1;
  const splash = document.getElementById(`${result}-splash`);
  splash.style.visibility = "visible";
  Mousetrap.bind("enter", () => {
    splash.style.visibility = "hidden";
    nextLevel();
  });
}

function removeSplash (maze) {
  const splashes = document.querySelectorAll('.splash');
  splashes.forEach(splash => {
    splash.style.visibility = "hidden";
  });
  maze.bindKeys();
  Mousetrap.unbind("enter");
}
