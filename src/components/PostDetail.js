import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";

function PostDetail(){
    const [post, setPost] = useState({});
    let { postId } = useParams();

    useEffect(() => {
        firestore.collection('posts').doc(postId).get().then((snapshot) => {
            setPost(snapshot.data());
        })
    }, []);

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;