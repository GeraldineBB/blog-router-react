import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({postsData, className}) => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className="posts-list">

      {
        postsData.map(
          (post) => <Post key={post.id} {...post} className={className}/>
        )

      }

    </div>
  </main>
);

Posts.propTypes = {
  postsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      category: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      excerpt: PropTypes.string.isRequired, 
    })
  ).isRequired,
  className: PropTypes.bool.isRequired, 
}

export default React.memo(Posts);
