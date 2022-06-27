import './style.css'
import './src/minesweeper.js/minesweeper'
import { genGame as genGameAtElement } from './src/minesweeper.js/minesweeper';

// Constants


// Functions
const initApp = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>

    <div id="minesweeper-js"></div>
  `
}


// Main

function main() {
  initApp();
  genGameAtElement('#minesweeper-js');
}

main()