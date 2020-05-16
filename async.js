/* 
SETUP:
- Embed axios CDN and lodash CDN
- Defined async function fetchPost
- Defined renderPosts get posts render to DOM
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
