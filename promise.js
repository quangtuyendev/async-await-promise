/* 
SETUP:
- Embed axios cdn and lodash cdn
- Defined async function fetchPost
- Defined renderPosts get posts to render to DOM
*/
import { renderPosts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    /* const fetchPost = () => {
        const URL = 'http://jsonplaceholder.typicode.com/posts';
        return new Promise((resolve, reject) => {
            axios.get(URL)
                .then(({ data }) => renderPosts(data)) // Render posts
                .catch(error => console.log('Fetch posts faild')) // Handle error
        })
    };
    fetchPost(); */

    const fetchPost = () => {
        const URL = 'http://jsonplaceholder.typicode.com/posts';
        return new Promise((resolve, reject) => {
            axios.get(URL)
                .then(({ data }) => resolve(data))
                .catch(() => reject(new Error('Fetch posts faild')))
        })
    };
    fetchPost() // Fetch posts
        .then(data => renderPosts(data)) // Get posts from resolve and render posts
        .catch(error => console.log(error)) // Handle error
});