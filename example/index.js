import render from '../src/index.js'
import data from './data.json'

const defaultOptions = {
  data,
  width: window.innerWidth,
  height: window.innerHeight,
  container: document.body
}

render.pixi(defaultOptions)
