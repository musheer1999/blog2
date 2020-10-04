import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/blog/')
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post._id} >
            <div className="card-content">
                 <p  className="right-align">posted on:{post.createdAt.substring(0,10)}</p>
              <span className="card-title " Style="color:red">{post.heading}</span><br/>
              <p className="truncate">{post.text}</p><br/><br/>
              <button><Link to={"/edit/"+post._id}>Read Blog <i class="material-icons">import_contacts</i></Link></button>
              
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">BLOGS</h4><br/><br/>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home