const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()


app.use(express.json())
app.use(require('cors')())
app.use(require('morgan')('dev'))

const userRoute = require('./route/user-route')


app.use('/api', userRoute)



app.listen(PORT, () => console.log(`sever started on ${PORT}`))