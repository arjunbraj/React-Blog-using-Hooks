import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
// import styled from 'styled-components';

// const PostSubTitle = styled.p`
//     font-size: 30;
//     `;

function Home(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firestore.collection('posts').onSnapshot((snapshot) => {
            const posts = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setPosts(posts);
        });
    }, []);

    return (
        <div className="home">
            <h1 style={styles.heading}>React Blog using Hooks</h1>
            <div id="blog-by">Arjun</div>
            {posts.map((post, index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    heading: {
        marginTop: 30,
        fontSize: 56
    }
}

export default Home;