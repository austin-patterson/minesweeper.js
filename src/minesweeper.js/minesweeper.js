export class Minesweeper {

  /**
   * 
   * @param {number || 10} numRows Number of vertical rows
   * @param {number || 10} numCols Number of horizontal columns
   * @param {Array<PlayerAction<{ eventType: ('click' || 'contextMenu'), target: {x: number, y: number}, time: ms}>>} history Array of PlayerAction objects that describe the procedural history of game state. This can be used for Undo & Redo functionality.
   */
  constructor(numRows, numCols, history = null, boardState = null) {
    this.numRows = numRows || 10
    this.numCols = numCols || 10
    this.history = history
    this.boardState = boardState || genEmptyBoard()
  }

}

export function genEmptyBoard(numRows = 10, numCols = 10) {
  let newBoard = []
  for (let y = 0; y < numRows; y++) {
    newBoard[y] = []
    for (let x = 0; x < numCols; x++) {
      newBoard[y][x] = null
    }
  }
  return newBoard;
}

export function revealTile(board, x, y) {

}

export function checkWin(board) {

}

export function checkLose(board) {

}

export function execute(board, playerAction) {
  
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

  }
}