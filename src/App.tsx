import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import axios from "./axios";
import {useState} from "react";

function App() {

    type PostType = {
        _id: string,
        title: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        __v: number,

    }


    let [posts, setPosts] = useState<PostType[]>([])

    useEffect(()=> {
        axios.get('/posts').then(res => {
            setPosts(res.data)
        })
    }, [])

    let [newPostValue, setNewPostValue] = useState<string>('')


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostValue(event.currentTarget.value)
    }

    const addPostOnClickHandler = () => {
        axios.post('/posts', {text: newPostValue}).then(res => {
           setPosts([res.data, ...posts])
        })
        setNewPostValue('')
    }

    const deletePost = (id: string) => {
        axios.delete(`/posts/${id}`).then(res => {
            setPosts(posts.filter(post => post._id !== id))
        })
    }

    return (
        <div className="App">
            <textarea value={newPostValue} onChange={onChangeHandler}></textarea>
            <button onClick={addPostOnClickHandler}> add new post</button>
            {posts.map((post) => {

                const deletePostHandler = () => {
                    deletePost(post._id)
                }

                return (
                    <div>
                        <p>{post.text}</p>
                        <button onClick={deletePostHandler}>X</button>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
