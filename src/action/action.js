'use server'

import Post from '@/models/Post'
import dbConnect from "@/app/lib/db";

const addPost = async post => {
    await dbConnect();

    const title = post.get('title')
    const description = post.get('description')

    const newPost = new Post({ title, description })
    const savedPost = await newPost.save()

    return {
        _id: savedPost._id.toString(),
        title: savedPost.title,
        description: savedPost.description
    }
}

const getPosts = async () => {
    await dbConnect();

    return Post.find();

    // const posts = await Post.find({})
    // return posts.map(post => ({
    //     _id: post._id.toString(),
    //     title: post.title,
    //     descri  ption: post.description
    // }));
}

export { addPost, getPosts }