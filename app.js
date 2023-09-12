import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor em https://localhost:${port}`)
})

app.use(express.json())

// falta importar e instanciar os controladores