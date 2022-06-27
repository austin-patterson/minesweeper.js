import '../../styles/minesweeper.css'

// TODO? Consider changing this into a class?

// Variables
let gameRoot = null,
    numRows = 10,
    numCols = 10,
    board = []

// Exported functions
export function getBoard() {
  return board
}

export function genGame(querySelector, rows = 10, cols = 10) {
  console.log('%c[BEGIN] init minesweeper.vanilla.js', "color: #17c6da")

  gameRoot = document.querySelector(querySelector);
  if (!gameRoot) {
    console.log('%cCould not find an element from the provided query selector: "' + querySelector + '"', "color: red")
    return
  }

  numRows = rows
  numCols = cols
  setRootCss(gameRoot)

  board = genBoard(numRows, numCols)
  
  console.log('%c[END] init minesweeper.vanilla.js', "color: #17c6da")
}

// Helper functions
function setRootCss(root) {
  root.classList.toggle('minesweeper-game')
  root.style.setPropertyValue("--var-sizing-factor", 1)
  root.style.setPropertyValue("--var-grid-height", 16)
  root.style.setPropertyValue("--var-grid-width", 16)
}

function genBoard(numRows, numCols) {
  let board = []
  for (let y = 0; y < numRows; y++) {
    board[y] = []
    for (let x = 0; x < numCols; x++) {
      board[y][x] = genTile()
    }  
  }

  return board
}

function genTile() {
  const tile = document.createElement('div')
  tile.classList.add('tile')
  tile.dataset.state = "hidden"

  return tile
}