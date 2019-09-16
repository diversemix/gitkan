const config = require(__dirname + "/../config/local")

module.exports = {
    get(val) {
        return config[val]
    }
}
