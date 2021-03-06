import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
}

function PostList(props) {
    const { posts } = props;
    console.log(posts);
    return (
        <ul className='post-list'>
            {posts.map(post => (
                <li style={{ borderBottom: '1px #ccc solid' }} key={post.key}>{post.name}</li>
            ))}
        </ul>
    );
}

export default PostList;