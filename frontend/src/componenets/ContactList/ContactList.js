import React, {useEffect} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { getContacts } from '../../Js/Action/actionsContact'
import ContactCard from '../ContactCard/ContactCard'
import './ContactList.css'
import {Spinner}from 'react-bootstrap'

const ContactList = () => {
    const contacts = useSelector(state => state.contactReducer.contacts)
    const isLoading = useSelector(state => state.contactReducer.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
        
    }, [dispatch])
    return (
        <div>
            {isLoading? 
            
            <Spinner animation="border" role="status" >
            <span className="sr-only">Loading...</span>
           </Spinner>
            :
            <div className="contactList">
            {contacts.map (contact=> <ContactCard  contact={contact} key={contact._id} />)}
             </div>
            }
            
           
            
        </div>
    )
}

export default ContactList
