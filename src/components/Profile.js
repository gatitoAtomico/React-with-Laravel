import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Col, TextArea} from 'reactstrap';
import axios from 'axios';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
          'posts' : []
        };    
      }

      //runs before render method runs 
 componentDidMount = () =>{

  axios.get('userMessages').then(
    res => {
      this.setState({
        posts: res.data.posts
      });
    }
      ,
    err => {
      console.log(err);
    }
  )



};

    render() {

        if(this.props.User){
            let error = '';
            if(this.state.message){
    
                error = (
                    <div className="alert alert-danger" role="alert">
                         {this.state.message}
                    </div>
                )
            }


            return (
                <div>
                <Container>
                <form onSubmit={this.handleSubmit}>      
                <div className ="row">
            <div className= "col-md-12">
              <div className="card">
                  <div className="card bg-dark text-white">
                      <div className = "card-header">
                          All Posts
                      </div>
                      <div className="scrollable">
                        <div className="card-body text">
                        {this.state.posts.map(post => <div key={post.id} className="media">
           
                <div className="media-body">
                  
                       <p>{post.body}</p>
                    
                </div>
                </div>)}
         
                          </div>
                        </div>
                  </div>
                  </div>   
                </div>
              </div>          
               </form>
               </Container>
          </div>
         
               );
        }

        return (
            <div>
            <Container>
    
              <div className ="row">
                <div className= "col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h3>Please Log In</h3>
                    </div>
                  </div>
                  </div>
                  </div>
                    
        </Container>
          </div>
                   
          );


  
    }
}

export default Profile;
