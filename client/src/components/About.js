import React, { Component } from 'react'
import axios from 'axios'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
class Home extends Component {


    


  render(){
   

    return (
      <div Style="padding-top:200px"> 
          <div className="container">
           
            <div className="post card" Style="padding:20px 20px 20px 20px">
                <h2 className="center" Style="color:red">ABOUT</h2>
            <h4>Hello everyone!! Many people search for the platform where they want to share their ideas with other people,
                 this website provides you a platform where you can post your blogs which can be 
                 seen publicly and other peoples can also give their feedback on your idea.


                  </h4>
                  <br>
                  </br>
                  <h4>All people should keep in mind that no one should post blogs with hate and fake news on 
                      the website such types of blogs will not be tolerated.
                  </h4>
            </div>
            </div>
      </div>
    )
}
}
export default Home