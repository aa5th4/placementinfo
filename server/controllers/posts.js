import express from 'express';
import PostMessage from '../models/postMessage.js';
const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost=async(req,res) => {
    const { name,
        amount,
        location,
        organization,
        eligible} = req.body;

    const newPostMessage = new PostMessage({name,
        amount,
        location,
        organization,
        eligible})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;
