const config = require('./config')
const colors = require('colors')
const gitApi = require('./git-api')
const util = require('./util')

const colorList = [ colors.green, colors.blue, colors.yellow ]

const promises = config.get('columns').map(column => (
    gitApi.getCardsInColumn(column.name, column.id)
))

promises.push(gitApi.getPullRequests("PULL REQUESTS"))

Promise.all(promises)
    .then(results => {
        results.map( r => {
            console.log(r.name)
            util.showTable(r.table, colorList)
        })
    })
