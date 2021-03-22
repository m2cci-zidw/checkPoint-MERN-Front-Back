import React from 'react'
import{Card,Button}from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact, getContact, ToggleTrue } from '../../Js/Action/actionsContact'
import './ContactCard.css'
import avatar from '../../assets/avatar.jpg'

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    
    
    return (
        <div>
            <Card className="card" >
               
                <Card.Body>
                    <Card.Img variant="top" className="avatar" src={avatar} alt="image" />
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Title>{contact.phone}</Card.Title>
                    <Card.Title>{contact.email}</Card.Title>
                    
                    
                    <div className="ButtonCard">
                    <Button variant="danger"
                        onClick={()=>dispatch(deleteContact(contact._id))}>  Delete 
                    </Button>
                    <Link to="/eddit-contact">
                         <Button variant="success"
                         onClick={()=>{dispatch(ToggleTrue()); dispatch(getContact(contact._id))}}>  Edit </Button>
                    </Link>
                        
                    </div>

                    
                        

                </Card.Body>
            </Card>

            
            
        </div>
    )
}

export default ContactCard
