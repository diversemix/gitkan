const colors = require('colors')
const gitApi = require('./git-api')
const util = require('./util')

gitApi.getPullRequests()
    .then(results => {
        util.showTable(results, [ colors.green, colors.blue, colors.yellow ])
    })

