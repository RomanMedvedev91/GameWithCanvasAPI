const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;


// Create new Engine
const engine = Engine.create();
// Give access to World that create along with that engine
const { world } = engine;
const render = Render.create({
    // pass it in options object
  element: document.body,
  engine: engine,
  options: {
      wireframes: true,
      width,
      height
  }  
});

Render.run(render);
Runner.run(Runner.create(), engine);



// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

// Maze generation

const shuffle = (arr) => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);
        counter --;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

// convenient way
const grid = Array(cells)
.fill(null)
.map(() => Array(cells).fill(false));

// creating arrays with horiz & vertic 
const verticals = Array(cells)
.fill(null)
.map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
.fill(null)
.map(() => Array(cells).fill(false));

// Pick a randon starting cell
startRow = Math.floor(Math.random() * cells);
startColumn = Math.floor(Math.random() * cells);

const steps = (row, column) => {
    // if a cell has been visited at [row, column], then return
    if(grid[row][column]) {
        return
    }
    // Mark this cell as being visited
    grid[row][column] = true;
    // Assemble randomly-ordered list on neighbors
    const neighbors = shuffle([
        [row - 1, column],
        [row, column + 1],
        [row + 1, column],
        [row, column -1]
    ]);

    // for each neighbor take a step

    // if we have visited that neighbor, continue to next neighbor

    // remove a wall from either horizontals or verticals

    // visit that next cell

};

steps(startRow, startColumn);

console.log(grid);
