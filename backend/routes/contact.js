// require express

const express= require('express')


// routes
const router = express.Router()

// require  contact modules
const Contact = require('../models/Contact')
// const contact= require('../models/Contact')

//require controllers
const controllers=require('../controllers/contact.controllers')

// **********Routes***********

/**
 * 
 * path: http://localhost:7000/api/contacts/test
 * @pathmethod:  GET
 * @DATA: no data
 * @acces: public
 */
router.get('/test',(req, res)=>{
    res.send('hello test')
})
/**
 * @des:add contact
 * path: http://localhost:7000/api/contacts/
 * @pathmethod:  POST
 * @DATA: req.body
 * @acces: public
 */
router.post('/', controllers.addContact)
/**
 * @des:get all contacts
 * path: http://localhost:7000/api/contacts/
 * @pathmethod:  GET
 * @DATA: req.body
 * @acces: public
 */
router.get('/',controllers.showAllContact )
/**
 * @des:get one contact
 * path: http://localhost:7000/api/contacts/:id
 * @pathmethod:  GET
 * @DATA: req.params
 * @acces: public
 */
router.get('/:id', controllers.showOneContact )

/**
 * @des:delete one contact
 * path: http://localhost:7000/api/contacts/:id
 * @pathmethod:  DELETE
 * @DATA: req.params
 * @acces: public
 */
router.delete('/:id', controllers.deleteContact)
/**
 * @des:update contact
 * path: http://localhost:7000/api/contacts/:id
 * @pathmethod:  DELETE
 * @DATA: req.params, req.body
 */
router.put('/:_id',controllers.updateContact)
 
module.exports=router