// require mongodb interface
var mongoose = require('mongoose');


// Instantiate a mongoose model defining the properties we expect to find on our messages
// Uppercase M of Message means its something we wish to instantiate and that its a model
module.exports = mongoose.model('Message',{
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

