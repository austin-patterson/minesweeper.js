export class Minesweeper {
  // Array of PlayerAction objects that describe the procedural history of game state. This can be used for Undo & Redo functionality.
  history = null
  
  //  board[x][y]: { -1: mine, 0-8: number of mines in adjacent tiles }
  board = []


  /**
   * 
   * @param {number || 10} numRows Number of vertical rows
   * @param {number || 10} numCols Number of horizontal columns
   * @param {Array<PlayerAction>>} history Array of PlayerAction objects that describe the procedural history of game state. This can be used for Undo & Redo functionality.
   */
  constructor(numRows, numCols, numMines, history = null, boardState = []) {
    this.numRows = numRows || 10
    this.numCols = numCols || 10
    this.numMines = numMines || 15
    this.history = history
    this.board = (boardState?.length == numRows && boardState[0]?.length == numCols) || Minesweeper.genEmptyBoard()
  }

  /*** Static functions ***/

  static genEmptyBoard(numRows = 10, numCols = 10) {
    let newBoard = []
    for (let y = 0; y < numRows; y++) {
      newBoard[y] = []
      for (let x = 0; x < numCols; x++) {
        newBoard[y][x] = null
      }
    }
    return newBoard;
  }
  
  static revealTile(board, x, y) {
    recursiveRevealTile(board, x, y)
  }
  
  // static checkWin(board) {
  
  // }
  
  // static checkLose(board) {

  // }

  static isMine(board, x, y) {
    return board[x][y] === 0
  }

  static genScore(board, time, numActions)


  /*** Public functions ***/
  
  // Reveals tile at board[x][y]. May cause a chain reaction revealing adjacent tiles, and so on.
  reveal(x, y) {}

  // Toggles flag at board[x][y]
  flag(x, y) {}

  // Returns the current score.
  getScore() {}

  // Returns the "current" time on the timer in ms.
  getTime() {}
  
  /*** Private functions ***/

  // Fills the board with mines and numbers.
  initBoard(numMines) {
  
  }

  selectRandomPosition(rowLength, columnLength) {
    return { x: Math.random() * rowLength, y: Math.random() * columnLength }
  }

  recursiveRevealTile(board, x, y) {

  }

  execute(board, playerAction = new PlayerAction()) {
    
  }
  
}


/*** Helper Classes ***/

/**
 * Describes an action taken by the player.
 */
class PlayerAction {
  default = {
  
    target: {
      x: -1,
      y: -1,
    },
    
    eventType: {
      REVEAL: 'click',
      FLAG: 'contextmenu',
      UNDO: 'undo',
    },

    ms: () => Date().getMilliseconds(),

  }

  constructor(target = this.default.target, eventType = this.default.eventType, ms = this.default.ms()) {
    this.target = target
    this.eventType = eventType
    this.ms = ms
  }
}
