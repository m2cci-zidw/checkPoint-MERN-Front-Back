import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import{Form,Button}from 'react-bootstrap'
import './ContactAddEdit.css'
import { addContact, editContact} from '../../Js/Action/actionsContact'


const ContactAddEdit = ({history}) => {
    const isEdit = useSelector(state => state.contactReducer.isEdit)
    const useReducer = useSelector(state => state.contactReducer.user)
    
    const [user, setUser] = useState({name:"", email:"", phone:0})

    useEffect(() => {
        isEdit? setUser(useReducer):setUser({name:"", email:"", phone:0})
    }, [isEdit,useReducer])
    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})

    }
    
    const dispatch = useDispatch()
    return (
        // <div >
            <div className="formulaire" >
                <Form>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control  placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control  placeholder="Email"
                         name="email"
                         value={user.email}
                         onChange={handleChange} 
                          />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control  placeholder="Phone"
                         name="phone"
                         value={user.phone}
                         onChange={handleChange} 
                        />
                        
                    </Form.Group>

                {
                    isEdit?
                    <Button variant="success"
                    onClick={()=>{dispatch(editContact(user._id,user)); history.push('/')}}
                    >  Edit  </Button>
                    :
                    <Button variant="success"
                    onClick={()=>{dispatch(addContact(user)); history.push('/')}}
                    >  Add  </Button>
                }
                </Form>

                
            </div>
        // </div>
    )
}

export default ContactAddEdit
