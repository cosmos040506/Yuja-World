const express_box = require('express')
const app = express_box()

app.get('/', function (req, res) {
    res.send("idiot!")
})

app.get('/ya', function (req, res) {
    res.send("응 도라가~")
})

// app.get('/', (req, res) => {
//     res.send("hello world!")
// })

app.listen(666, function () {
    console.log("System is working")
})

//babo