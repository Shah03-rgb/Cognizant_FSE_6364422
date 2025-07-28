import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => this.setState({ posts: data }))
      .catch(err => { throw err; });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Error loading posts:\n' + error.message);
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Blog Posts</h2>
        {this.state.posts.map(p => (
          <Post key={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
