const addContact= async(req,res)=>{

    try {
        const{name,email,phone}=req.body
        if(!name || !email){
           res.status(400).send({msg:'name and email are required!!!'}) 
           return
        }

        //email is unique

        const contact= await Contact.findOne({email})
         if (contact){
             res.status(400).send({msg:'Contact already exist!!!'})
             return
         }
        const newContact=new Contact({
            name,
            email,
            phone
        })
        await newContact.save()
        res.status(200).send({msg:'Contact added successfuly', newContact})
        
    } catch (error) {
        res.status(400).send({msg:'can not add new contact',error})
        
    }
  
}

const showAllContact=async(req,res) =>{
    try {
        const listContacts=await Contact.find()
        res.status(200).send({msg:"this is the list of contact...",listContacts})
        
    } catch (error) {
        res.status(400).send({msg:'can not get all contacts...',error})
        
    }
}
const showOneContact= async(req,res)=>{
    try {
        const _id= req.params.id
        const contactToFind= await Contact.findOne({_id})
        res.status(200).send({msg:"I get the contact  :",contactToFind})
        
    } catch (error) {
        res.status(400).send({msg:"can not get contact with this id",error})
        
    }

}
const deleteContact=  async(req,res)=>{
    try {
        const _id= req.params.id
        const contactToDelete= await Contact.findOneAndDelete({_id})
        if (!contactToDelete){
            res.status(200).send({msg:"Contact already deleted"})
            return
        } 
            res.status(200).send({msg:"Contact deleted",contactToDelete})

       
    } catch (error) {
        res.status(400).send({msg:'contact is not deleted!!!', error})
        
    }

}

const updateContact=  async(req,res)=>{
    try {
        const {_id}= req.params
        const contactToUpdate= await Contact.updateOne ({_id},{$set:{...req.body}})
        
        if (!contactToUpdate.nModified){
            res.status(400).send({msg:'Contact is already uppdated!!!'})
            return
        }
        res.status(200).send({msg:'Contact uppdated', contactToUpdate})
    } catch (error) {
        res.status(400).send({msg:'we cant uodate this contact!!!', error})
        
    }
}

module.exports=controllers={addContact,showAllContact,showOneContact,deleteContact,updateContact}