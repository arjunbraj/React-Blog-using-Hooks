import { useState } from "react";
import {firestore} from '../firebase';
import { useFormInput } from "../hooks";
// import './button.css';

function CreatePost(){

    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit(e){
        e.preventDefault();
        console.log('title: ', title.value);
        console.log('subtitle: ', subTitle.value);
        console.log('content: ', content.value);

        firestore.collection('posts').add({
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date()
        })
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content} ></textarea>
                </div>
                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;