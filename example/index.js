import render from '../src/index.js'
import data from './data.json'

const defaultOptions = {
  data,
  width: window.innerWidth,
  height: window.innerHeight,
  container: document.body
}

render.pixi(defaultOptions)

const threeBtn = document.getElementById('three')
const pixiBtn = document.getElementById('pixi')

threeBtn.addEventListener('click', () => {
  document.querySelector('canvas').remove()
  document.querySelector('h1').innerHTML = 'by Three.js'
  render.three(defaultOptions)
})

pixiBtn.addEventListener('click', () => {
  document.querySelector('canvas').remove()
  document.querySelector('h1').innerHTML = 'by PixiJS'
  render.pixi(defaultOptions)
})
