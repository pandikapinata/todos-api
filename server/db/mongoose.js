var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb:mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose}