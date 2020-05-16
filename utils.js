/* Render posts */
export const renderPosts = posts => {
    const rootElm = document.getElementById('posts');
    const result = _.map(posts, ({ title }) => `<li>${title}</li>`)
    // rootElm.insertAdjacentHTML('afterbegin', result.join(''))
    rootElm.innerHTML = result.join('');
};
