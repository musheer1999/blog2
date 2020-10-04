import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
class Write extends Component {
constructor(props){
    super(props)

    this.onChangeusername = this.onChangeusername.bind(this)
    this.onchangeheading =this.onchangeheading.bind(this)
    this.onchangetext = this.onchangetext.bind(this)
    this.onchangedate = this.onchangedate.bind(this)
    this.onsubmit = this.onsubmit.bind(this);
  
    this.state={
        username:'',
        heading:'',
        text:'',
        date:new Date()
    }
}

onChangeusername(e){

    this.setState({
        username:e.target.value
    })
}
onchangeheading(e){
    this.setState({
        heading:e.target.value
    })
}
onchangetext(e){
    this.setState({
        text:e.target.value
    })
}

onchangedate(date){
    this.setState({
        date: date
    })
   
}

onsubmit(e){
    e.preventDefault()

    const addblog = {
        username :this.state.username,
        heading :this.state.heading,
        text : this.state.text,
        date :this.state.date
    }

  

    axios.post('http://localhost:5000/blog/add', addblog)
      .then(res => console.log(res.data));
    console.log("submitted")
    window.location = '/';
}
           
    render(){
        return(
            <div Style="padding-left:250px;padding-right:250px">
                
            <br/><br/><br/>
            <fieldset Style="margin:auto;border-radius:50px;padding:10px 50px 20px 50px">
            <legend className="flow-text" Style=" text-align: center;color:red; "><h2>CREATE YOUR BLOG</h2></legend>
            <form onSubmit={this.onsubmit}>
              <div className="form-group"> 
                <label>Username: </label><br></br>
                <input  type="text" Style="width:500px"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeusername}
                    />
              </div>
              <div className="form-group"> 
                <label>Heading: </label><br/>
                <input  type="text" Style="width:500px"
                    required
                    className="form-control"
                    value={this.state.heading}
                    onChange={this.onchangeheading}
                    />
              </div><br/><br/>
              <div className="form-group">
                <h4>Blog</h4>
                <pre>
                <textarea 
                    type="text" 
                    className="form-control"
                    value = {this.state.text}
                    onChange={this.onchangetext}
                    class="validate" name="blog" Style="margin:auto; height:240px;  padding:9px;  box-shadow:5px 5px 10px black"
                    />
                    </pre>
                        {/* <textarea type="text" id="textarea1" class="validate" name="blog" style="width:800px; height:200px;  padding:9px; background-color:blanchedalmond; box-shadow:5px 5px 10px black"></textarea> */}
              </div>
              <div className="form-group" Style="text-align: right">
             <br/><br/>
                <div>
                  <DatePicker
                   selected={this.state.date}
                    
                   onChange={this.onChangeDate}
                  />
                </div>
                
              </div>
              
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary red" />
              </div>
            </form>
            </fieldset>
          </div>
        )
    }

}
export default Write