import * as d3 from 'd3'
import * as PIXI from 'pixi.js'
import { colour } from './utils.js'

export default function ({
  data,
  width,
  height,
  container
}) {
  const stage = new PIXI.Container()
  const renderer = PIXI.autoDetectRenderer(width, height, {
    antialias: !0, transparent: !0, resolution: 1 })
  const links = new PIXI.Graphics()

  stage.addChild(links)
  container.appendChild(renderer.view)

  const simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id((d) => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))

  data.nodes.forEach((node, i) => {
    node.gfx = new PIXI.Graphics()
    node.gfx.lineStyle(1.5, 0xFFFFFF)
    node.gfx.beginFill(colour(node.id))
    node.gfx.drawCircle(0, 0, 5)
    stage.addChild(node.gfx)
  })

  simulation
    .nodes(data.nodes)
    .on('tick', ticked)

  simulation.force('link')
    .links(data.links)

  function ticked () {
    data.nodes.forEach((node) => {
      let { x, y, gfx } = node
      gfx.position = new PIXI.Point(x, y)
    })

    links.clear()
    links.alpha = 0.6

    data.links.forEach((link) => {
      let { source, target } = link
      links.lineStyle(Math.sqrt(link.value), 0x999999)
      links.moveTo(source.x, source.y)
      links.lineTo(target.x, target.y)
    })

    links.endFill()

    renderer.render(stage)
  }
}
