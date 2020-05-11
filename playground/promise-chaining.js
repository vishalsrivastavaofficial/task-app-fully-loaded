require('../src/db/mongoose')

const User = require('../src/models/user')
// const Task = require('../src/models/task')

//5eb823cf88914948b8413da9

// User.findByIdAndUpdate('5eb823cf88914948b8413da9', {
//     age: 18
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 18 })
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( {age})
    return count
}

updateAgeAndCount('5eb823cf88914948b8413da9', 2).then((count)=>{
    console.log(count)
}).catch((e)=> {
    console.log(e)
})

// Task.findByIdAndDelete('5eb823cf88914948b8413da9').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })