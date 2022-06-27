import '../../styles/minesweeper.css'

// TODO? Consider changing this into a class?

// Variables
let gameRootElement = null,
    boardElement = null,
    numRows = 10,
    numCols = 10,
    board = []

// Exported functions
export function getBoard() {
  return board
}

export function genGame(querySelector, rows = 10, cols = 10) {
  console.log('%c[BEGIN] init minesweeper.vanilla.js', "color: #17c6da")

  gameRootElement = document.querySelector(querySelector);
  if (!gameRootElement) {
    console.log('%cCould not find an element from the provided query selector: "' + querySelector + '"', "color: red")
    return
  }

  numRows = rows
  numCols = cols
  setRootCss(gameRootElement)

  boardElement = genBoard(numRows, numCols)

  console.log(boardElement)

  // Add children to gameRoot
  gameRootElement.appendChild(boardElement)
  
  console.log('%c[END] init minesweeper.vanilla.js', "color: #17c6da")
}

// Helper functions
function setRootCss(root) {
  root.classList.toggle('minesweeper-game')
  root.style.setProperty("--var-sizing-factor", '1')
  root.style.setProperty("--var-grid-height", '10')
  root.style.setProperty("--var-grid-width", '10')
}

function initBoard(numRows, numCols) {
  // TODO: board = initBoard() // from minesweeper.js

  let newBoard = []
  for (let y = 0; y < numRows; y++) {
    newBoard[y] = []
    for (let x = 0; x < numCols; x++) {
      newBoard[y][x] = genTile(x, y)
    }  
  }

  board = [...newBoard]

  // console.log('initBoard() => ', board)
  return board
}

function genBoard(numRows, numCols) {
  const element = document.createElement('div')
  element.classList.add('board')
  element.dataset.numRows = numRows
  element.dataset.numCols = numCols
  
  // console.log(initBoard(numRows, numCols))
  initBoard(numRows, numCols)

  board.forEach((row, x) => {
    board[x].forEach((col, y) => {
      element.appendChild(board[x][y])
    })
  })

  boardElement = element
  return boardElement
}

function genTile(x, y, state = "hidden") {
  const tile = document.createElement('div')
  tile.classList.add('tile')
  tile.dataset.state = state
  if (x != null && y != null) {
    tile.dataset.x = x
    tile.dataset.y = y
  }

  // console.log('genTile() => ', tile)
  return tile
}