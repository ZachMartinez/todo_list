import Model from './model.js'

const model = Model()
const data = require("./demo_data.JSON")
model.loadData(data)
console.log(model.getData())
