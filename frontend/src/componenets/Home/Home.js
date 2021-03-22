import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { ToggleFalse } from '../../Js/Action/actionsContact'
import{Button}from 'react-bootstrap'
import './Home.css'


const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="buttonHome">
                <Link   to="/"  > 
                    <Button variant="success">  Contact List </Button>
                </Link>
                <Link to= "add-contact">
                    <Button
                    onClick={()=>dispatch(ToggleFalse())}
                    > Add contact</Button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home
