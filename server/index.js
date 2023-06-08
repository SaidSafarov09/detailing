const express = require('express');
const cors = require('cors');
const connect = require('./connectDB/connect')
const bodyParser = require('body-parser')

const DataSchema = require('./model/data')

const PORT = 8080

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.


connect().then(() => {
    console.log('DB Connected')
    app.listen(PORT, (err) => {
        err ? console.log('Something went wrong') : console.log('Server is running')
        })
}).catch((err) => {
    console.log(err)
})


app.post('/api/data', async (req, res) => {
    const {name, phone, email, service , type, day, time} = await req.body
    console.log(req.body)

    try {
        const doc =  await new DataSchema({name, phone, email, service , type, day, time});
        await doc.save()
        return res.status(201).json({message: 'success'})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: 'Не удалось записать в БД'
        })
    }
})