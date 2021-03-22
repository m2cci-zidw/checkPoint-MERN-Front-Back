import { GET_CONTACTS_FAILED, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCES,GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE } from "../Constant/actionType"

const initState={
    contacts:[],
    errors:[],
    loading : false,
    user:{},
    isEdit:false
}
const contactReducer =(state= initState , {type,payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD: return{...state, loading:true}
        case GET_CONTACTS_SUCCES: return{...state, loading:false, contacts:payload}
        case GET_CONTACTS_FAILED: return{...state, loading:false, errors:payload}
        case GET_CONTACT : return {...state,user:payload }
        case TOGGLE_TRUE : return{...state, isEdit:true}
        case TOGGLE_FALSE: return {...state, isEdit: false}
        default: return state

    }
}
export default contactReducer