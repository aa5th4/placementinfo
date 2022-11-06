import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    name: String,
    amount: Number,
    location: String,
    organization: String,
    eligible: String
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;