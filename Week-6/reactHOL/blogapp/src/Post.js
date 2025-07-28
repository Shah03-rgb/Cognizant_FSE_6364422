import React from 'react';

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div className="post" style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '8px' }}>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
