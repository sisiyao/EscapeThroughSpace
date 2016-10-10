const LEVELS = {
  1: {
    walls: [
      [0, 300, 700, 500],
      [800, 0, 200, 200]
    ],
    endGoal: [700, 700, 300, 100],
    playerStart: [135, 150],
    finishText: [800, 760],
    mazeDimensions: [1000, 800],
    levelText: "Level One: practice!",
    instructionText: [0, 340],
    thisWayText: [350, 160],
    arrowText: [350, 190]
  },
  2: {
    walls: [
      [350, 0, 1850, 300],
      [0, 370, 300, 930],
      [300, 670, 300, 630],
      [600, 920, 300, 380],
      [650, 300, 1550, 300],
      [940, 600, 1260, 250],
      [1140, 850, 50, 300],
      [1440, 1000, 50, 300],
      [1740, 850, 50, 300],
      [2040, 1050, 460, 250]
    ],
    endGoal: [2200, 0, 300, 100],
    playerStart: [165, 100],
    finishText: [2300, 60],
    mazeDimensions: [2500, 1300],
    levelText: "Level Two"
  },
  3: {
    walls: [
      [450, 0, 100, 400],
      [0, 300, 250, 1200],
      [450, 625, 200, 400],
      [500, 1250, 2200, 250],
      [650, 625, 400, 200],
      [850, 0, 200, 650],
      [880, 990, 325, 100],
      [1450, 200, 200, 1050],
      [1350, 200, 100, 250],
      [1050, 575, 100, 250],
      [1650, 350, 1000, 250],
      [1850, 0, 50, 200],
      [2100, 150, 50, 200],
      [2350, 0, 50, 200],
      [2600, 150, 50, 200],
      [2850, 0, 150, 200],
      [2750, 800, 250, 270],
      [1650, 600, 750, 650]
    ],
    endGoal: [2700, 1400, 300, 100],
    playerStart: [165, 100],
    finishText: [2800, 1460],
    mazeDimensions: [3000, 1500],
    levelText: "Level Three"
  }
};

export default LEVELS;
