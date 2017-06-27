import { scaleOrdinal, schemeCategory20 } from 'd3'

/**
 * Color scale generator
 * @returns {function} color generator
 */
export const colour = (() => {
  const scale = scaleOrdinal(schemeCategory20)
  return (num) => parseInt(scale(num).slice(1), 16)
})()
