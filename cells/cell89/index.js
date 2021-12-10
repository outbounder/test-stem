let loopCount = 0
const value = require('package7')
const findRoot = require('organic-stem-skeleton-find-root')
const loadDna = require('organic-dna-repo-loader')
const {getCell} = require('organic-dna-cells-info')
setInterval(async function () {
  const root = await findRoot()
  const dna = await loadDna({root})
  const cell = getCell(dna, 'cell89')
  console.log(cell.dna.secret)
  console.log(value(), loopCount++)
}, 1000)