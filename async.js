/* 
SETUP:
- Embed axios cdn and lodash cdn
- Defiend async function fetchPost
- Defined renderPosts function to render posts
*/

import { renderPosts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Fetch posts from API
    const fetchPosts = async () => {
        const URL = 'http://jsonplaceholder.typicode.com/posts';
        try {
            const { data } = await axios.get(URL);
            renderPosts(data);
        } catch (error) {
            console.log('Fetch posts faild');
        }
    };
    
    fetchPosts();
});
