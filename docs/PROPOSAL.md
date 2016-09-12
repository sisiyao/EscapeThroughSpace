## Space Maze

### Background

Space Maze is a single player game. The player controls a ship that needs to navigate through space dodging various space objects. The catch is that the ship has malfunctioned and travels in a circle at a constant speed. The only way to move forward is to tap repeatedly at the gas pedal. The moment the player releases the gas pedal, the ship reverts back to its circular motion. The player has to be careful not to hit any other space objects the entire ship is doomed. The player also can't travel outside the edges of this portion of space or the ship is doomed (there are black holes all around).

This game is inspired by the iOS app Ball Maze.

### Functionality & MVP  

In this game, the player can:

- [ ] Start the game. Choose to play again at the end of the game.
- [ ] Control a spinning ship around the maze
- [ ] Hit other space objects, resulting in the end of the game. Hitting any edges of the allotted game space will also result in death
- [ ] Reach an end goal area that results in a win

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game instructions and the game board. The game board itself will have a rotating ship (see the spinning object in the wireframe). The game will also have multiple space objects that the player needs to avoid colliding with and a end goal area.

![wireframes](http://img.ipa4fun.com/17/0d/24/1047653834-screenshot-ipad-1.jpg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, other scripts will include:

`ship.js`: this script will handle the logic for rendering and moving the spinning ship. It will also handle the logic for ship collisions with other objects and logic to determine if the ship has reached the end goal

`spaceobject.js`: this script will handle space objects that the ship has to maneuver around

`endgoal.js`: this script generates an end goal area for the ship to reach

`game.js`: this script will handle the logic of gameplay and various levels of the game

`gameview.js`: this script will handle the rendering of animation frames and binding of keys

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file, the bare bones of all 3 scripts outlined above, and flesh out the `ship.js` script. Goals for the day:

- Get a green bundle with `webpack`
- Render a ship to the screen and write all the logic to move the ship around, including the keybinding

**Day 2**: Build out the `endgoal.js` and `spaceobject.js` scripts so that the ship can navigate around the game board.  Goals for the day:

- Render various space objects of different shapes and sizes
- Render an end goal area for the ship to reach
- Write the game logic for winning and losing

**Day 3**: Finalize game logic in `game.js` and `gameview.js`. Create multiple levels for the game in `game.js`. Goals for the day:

- Design at least 2-3 levels for the game with different placements of space objects and end goal
- Design the logic to go from level to level

**Day 4**: Create the start of game modal.  Style the frontend, making it polished and professional.  Goals for the day:

- Have a nicely designed instructions / start of game package
- Style all the components so that the game resembles space

### Bonus features

- [ ] Add more complex space objects that spin / move in ways that are challenging to maneuver around
- [ ] Add coins so that the player can collect points
- [ ] Use a 3D js libary upgrade to 3D rendering
