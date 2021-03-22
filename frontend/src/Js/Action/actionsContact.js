import { GET_CONTACTS_FAILED, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCES, GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE } from "../Constant/actionType";

import axios from 'axios'

export const getContacts=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        const res = await axios.get('/api/contacts')
        dispatch({type:GET_CONTACTS_SUCCES, payload:res.data.listContacts})
        
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAILED, payload:error})
        
    }

}
// delete contact
export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`api/contacts/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
        
    }

}

// Add Contact
export const addContact =(newContact)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts', newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
        
    }

}



// edit Contact
export const editContact=(id,newContact)=>async(dispatch)=>{
    try {
        await axios.put(`api/contacts/${id}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
        
    }

}
// get one Contact
export const getContact=(id)=>async(dispatch)=>{
    try {
        const res= await axios.get(`api/contacts/${id}`)
        
        dispatch({type:GET_CONTACT, payload:res.data.contactToFind})
    } catch (error) {
        console.log(error)
        
    }

}

// TOGGLE TRUE 
 export const ToggleTrue=()=>{
     return {
         type:TOGGLE_TRUE
     }
 }
 // TOGGLE TRUE 
 export const ToggleFalse=()=>{
    return {
        type:TOGGLE_FALSE
    }
}