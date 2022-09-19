import React, {useState} from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Content from './Content';
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';


function Add() {

    const handleSubmit=(e)=>{
        e.preventDefault();

        // if (this.state.age === ""){
        //     alert("Please fill all the fields")
        //     return;
        // }
        // this.props.addContactHandler(this.state);
        // this.setState({age:""});

        const ids = uuid();
        let unique =ids.slice(0,4);

        let a = Name

        Content.push({id: unique, name : a});

        history('/');
    }
    const[Name, setName]= useState('');

    let history = useNavigate();
    
  return (
      <div>
        {/* <Form className="d-grid gap-2" style={{ margin:"15rem" }}>
            <FormGroup className="mb-3" >
                <Form.Control type="text" placecholder="Enter Text" required onChange={(e) => setName(e.target.value)}> 
                </Form.Control>
                <textarea rows="4" cols="50" required onChange={(e) => setName(e.target.value)}>Enter text here...</textarea>  
            </FormGroup>   
            <Button className='abc' onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form> */}

        <h2>What is in your mind?</h2>
         <form action="">
            <div>
            <textarea rows="4" cols="50" required onChange={(e) => setName(e.target.value)}></textarea>
             </div>
            <Button className='abc' onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default Add
