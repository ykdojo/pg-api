var fs = require('fs')
var path = require('path')

module.exports = {
  columns: {
    list: fs.readFileSync(path.join(__dirname, '/columns/list.sql')).toString(),
  },
  config: {
    list: fs.readFileSync(path.join(__dirname, '/config/list.sql')).toString(),
    version: fs.readFileSync(path.join(__dirname, '/config/version.sql')).toString(),
  },
  constraints: {
    list: fs.readFileSync(path.join(__dirname, '/constraints/list.sql')).toString(),
  },
  joins: {
    list: fs.readFileSync(path.join(__dirname, '/joins/list.sql')).toString(),
  },
  plugins: {
    list: fs.readFileSync(path.join(__dirname, '/plugins/list.sql')).toString(),
  },
  policies: {
    list: fs.readFileSync(path.join(__dirname, '/policies/list.sql')).toString(),
  },
  stats: {
    tableSize: fs.readFileSync(path.join(__dirname, '/stats/table_size.sql')).toString(),
  },
  sequences: {
    list: fs.readFileSync(path.join(__dirname, '/sequences/list.sql')).toString(),
  },
  types: {
    list: fs.readFileSync(path.join(__dirname, '/types/list.sql')).toString(),
  },
  tables: {
    list: fs.readFileSync(path.join(__dirname, '/tables/list.sql')).toString(),
    grants: fs.readFileSync(path.join(__dirname, '/tables/grants.sql')).toString(),
  },
  users: {
    list: fs.readFileSync(path.join(__dirname, '/users/list.sql')).toString(),
  },
  views: {
    list: fs.readFileSync(path.join(__dirname, '/views/list.sql')).toString(),
  },
}