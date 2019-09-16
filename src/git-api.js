const config = require('./config')
const axios = require('axios')

const headers = {
    'Accept' : 'application/vnd.github.inertia-preview+json',
    'Authorization' : `token ${config.get('git-token')}`
}

const github = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 2000,
    headers
});

const getPullRequests = async (name) => {
    return new Promise( async (resolve, reject) => {
        const response = await github.get(config.get('git-pulls'))
        const table = []
        response.data.map( item => {
            table.push({
                title: item.title,
                url: item.html_url,
                user:item.user.login
            })
        })
        resolve({
            table,
            name
        })
    })
}

const getCardsInColumn = async (name, columnId) => {
    return new Promise( async (resolve, reject) => {
        const response = await github.get(`projects/columns/${columnId}/cards`)
        const table = []
        const p = response.data.map( async (item) => {
            const resp2 = await github.get(item.content_url)
            table.push({
                title: resp2.data.title,
                url: resp2.data.html_url,
                user: resp2.data.user.login
            })
        })
        Promise.all(p).then( x => {
            resolve({
                table,
                name
            })
        })
    })
}

module.exports = {
    getPullRequests,
    getCardsInColumn
}