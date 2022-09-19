import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Content from './Content';
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';


function Edit() {
    const [Name, setName] = useState("");
    const [id, setId] = useState("");
    
    let history = useNavigate();
    
    var index = Content.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();

        let a = Content[index];
        a.name = Name;

        history('/');
    }

    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setId(localStorage.getItem('Id'))
    },[])
  return (
    <div>
        <Form className="d-grid gap-2" style={{ margin:"15rem" }}>
            <FormGroup className="mb-3" >
                <Form.Control type="text" placecholder="Enter Text" value={Name} required onChange={(e) => setName(e.target.value)}>   
                </Form.Control>
            </FormGroup>   
            <Button className='abc' onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>
  )
}

export default Edit
