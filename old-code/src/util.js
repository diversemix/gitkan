
const showTable = (table, colors) => {
    const table2 = formatTable(table)
    table2.map( row => {
        let col = 0
        let line = ""
        row.map( item => {
            line += colors[col](item)
            col += 1
        })
        console.log(line)
    })
}

const formatTable = (table, pad = 1) => {
    const columns = getMaxLengths(table)
    const newTable = []
    table.map(row => {
        thisRow = []
        let col = 0
        Object.keys(table[0]).map(item => {
            const str = row[item]
            const padding = pad + (columns[col] - str.length)
            thisRow.push(row[item] + " ".repeat(padding))
            col += 1
        })
        newTable.push(thisRow)
    })
    return newTable
}

const getMaxLengths = (table) => {
    if (table.length == 0)
        return ""
    const numColumns = Object.keys(table[0]).length
    const maxLengths = Array(numColumns).fill(0)
    table.map(row => {
        let col = 0
        Object.keys(table[0]).map(item => {
            const str = row[item]
            if (str.length > maxLengths[col])
                maxLengths[col] = str.length
            col += 1
        })
    })
    return maxLengths
}

module.exports = {
    formatTable,
    showTable,
}