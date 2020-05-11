const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
    

    // user.save().then(() => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(400)
    //     .send(error)
    // })
})

app.get('/users', async (req, res)=> {

    try{
        const users = await User.find({})
        res.send(users)

    }catch(e){
        res.status(500).send()
    }
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async (req, res)=> {
    const _id = req.params.id 

    try{
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
    

    // User.findById(_id).then((user)=>{
    //     if(!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(updates)
    })

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }
    const _id = req.params.id 
    try{
        const user = await User.findByIdAndUpdate(_id, 
            req.body, { new: true, runValidators: true })
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e){
        res.status(400).send(e)
    }
})

app.post('/tasks', (req, res)=>{
    const task = new Task(req.body)
    task.save().then((result) => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400)
        .send(error)
    })
})

app.get('/tasks', (req, res)=> {
    Task.find({}).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res)=> {
    const _id = req.params.id 
    Task.findById(_id).then((task)=>{
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})