import React, { Component } from 'react'
import axios from 'axios'

class Wblog extends Component {
    constructor(props) {
        super(props);
        
 
   this.onSubmit = this.onSubmit.bind(this)

   
        this.state = {
          
            username:'',
            heading:'',
            text:'',
            commentby:[],
            comment:[],
            date: new Date(),
            
          
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/blog/show/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              username: response.data.username,
              heading: response.data.heading,
              text: response.data.text,
              commentby:response.data.commentby,
              comment:response.data.comment,
              date: new Date(response.data.date)

            })   
          })
          .catch(function (error) {
            console.log(error);
          })
        }

        onSubmit(e) {
           
            let y = document.getElementById("cb").value;
            this.state.commentby.push(y)
                console.log(y)
            let z = document.getElementById("c").value;
            this.state.comment.push(z)
            console.log(z)
           
            console.log(this.state.commentby)
            
            
            const ub = {
              commentby: this.state.commentby,
              comment: this.state.comment
              
            }
        
            
        
            axios.post('http://localhost:5000/blog/update/' + this.props.match.params.id, ub)
              .then(res => console.log(res.data));
        
              this.setState({
                username:this.state.username,
            heading:this.state.heading,
            text:this.state.text,
            commentby:this.state.commentby,
            comment:this.state.comment,
            date: this.state.date,
              })
            
          }

   
       
         

  




  render(){
    const {commentby}= this.state
   
    const clist = commentby.map(comment =>
        {
             return(
                 <tr>

                    {comment}
                 </tr>
                
               
             )
        })


        const {comment}= this.state
        let i =-1
    const clist2 = comment.map(comment =>
        {
         
         i=i+1;   
            return(
                <div>
                <tr Style="margin:100px">
                <td ><b>{this.state.commentby[i]}:</b></td>
               
                   <td>{comment}</td> 
                            
                    </tr>
                <br></br>
                </div>
              
              )
        })

     

     
      

    return (
      <div Style="padding-right:250px;padding-left:250px">
       
             <div className="container">
                <p Style="margin-bottom:200px"></p>
               <div className="post card " Style=" margin:auto">
               <div className="card-content">
                <h3 Style="color:red">{this.state.heading}</h3>
                <hr/><br/>
               <p>{this.state.text}</p><br></br>
                    
         <p  Style="text-align:right;color:blue">Written by: {this.state.username}</p>
         <br/><br/><br/>
         <hr></hr>
        
         <p > Post Comments</p>
       
       <form onSubmit={this.onSubmit}>
          
           <input id="cb" type="text" placeholder="name" Style="width:1000px"  required ></input>
        
           <input id="c" type="text" placeholder="comment" Style="width:1000px"  required></input><br></br>
   
           <input type="submit" value="post comment"/>
       </form>
       <div Style="background-color:lightcyan">
        <h4>comments</h4>
      
      
                    <table>
                        {clist2}
                       
                    </table>
                    </div>
{/* <p>        {clist2}</p> */}
      
       
        
        
            
               </div>
               </div>
              

                    
               </div>
      </div>
    )
}
}
export default Wblog





// const {commentby}= this.state
   
// const clist = commentby.map(comment =>
//     {
//          return(<div className="post card">
//              <p>{comment}</p>
//             </div>
//          )
//     })


//     const {comment}= this.state

// const clist2 = comment.map(comment =>
//     {
        
//         return(<div className="post card">
//             <p>{comment}</p>
//            </div>
//           )
//     })


{/* <table border={2} >
         
<tr Style="margin:500px;bgcolor:blue">
<div className="post card">
    <td Style="color:blue;"><b>{clist}</b></td>
   
    <td >{clist2}</td>
    </div> 
</tr>

</table> */}