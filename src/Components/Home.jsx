import React, { Fragment } from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import content from './Content';
import Content from './Content';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {

    let history = useNavigate();


    const handleEdit=(id, Name)=>{
        localStorage.setItem('name',Name);
        localStorage.setItem('Id',id);
    }

    const handleDelete=(id)=>{
        var index = Content.map(function(e){
            return e.id
        }).indexOf(id);

        Content.splice(index,1);

        history('/')
    }
  return (
    <div className=''>
        <Row>
           
        <ul >
            <Col>
            <div className="column">
                    <input type="text" className="search" placeholder="Search by Artist,Event" name="search"/>
                  
            </div>
            </Col>
            <Col>
            <div className="column">
            <li> <a href="">Categories</a> </li>
            <li> <a href="">Music</a></li>
            <li> <a href="">Sport</a></li>
            <li><a href="">Arts</a></li>
            </div>
            </Col>
        </ul>
        </Row>
    <Row>
        <Col>
        <div className="container">
            <img className="image" src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Snow"/>
            <div className="centered">
                <img className="image2" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <h1>Mason Ward</h1>
                <h5 style={{ color:"Highlight" }}>Actress and Model</h5>
                
                <p style={{ color:"GrayText" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit, quas perferendis soluta nulla optio beatae dolorum magni commodi.</p>
              
            </div>
          </div>  
         </Col>
      <Col>
    <Fragment>
        <div style={{ margin:"10rem" }}>
        {
        content && content.length > 0
        ?
        content.map((item) =>{
            return(
                <div className='card'>
                    {item.name}
                    <br />
                        <div className='abc'>
                    <Link to = {'/edit'}>
                    <Button size='' onClick={() => handleEdit(item.id,item.name)} style={{ margin:"7px" }}>Edit</Button>
                    </Link>
                    <Button size='sm' onClick={() => handleDelete(item.id)} style={{margin:"7px"}}>Delete</Button>
                        </div>
                </div>
                        
                        )
                    })
                    :
                    "NO data available"
                }
            <br/>
            <Link className='d-grid gap-2' to={'/create'}>
                <Button size='lg'>Create</Button>
            </Link>
        </div>
    </Fragment>
    </Col> 
    </Row>
    </div>
  )
}

export default Home;
