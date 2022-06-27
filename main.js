import './style.css'
import './src/minesweeper.vanilla.js/minesweeper.vanilla'
import { genGame as genMinesweeperJS } from './src/minesweeper.vanilla.js/minesweeper.vanilla';

// Constants
let appRoot

// Functions
const initApp = () => {
  const appBase =  `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `
  if (!appRoot) appRoot = document.querySelector('#app')
  appRoot.innerHTML = appBase
}

const initVanilla = () => {
  const vanillaRoot = `
    <div id="minesweeper-js"></div>
  `
  appRoot.innerHTML += vanillaRoot
  
  genMinesweeperJS('#minesweeper-js')
}

// Main

initApp()
initVanilla()
