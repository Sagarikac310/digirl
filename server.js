const express=require('express')

const app = express()
app.set('view-engine','ejs')

app.use(express.static(__dirname+"/public"))
app.use('/img',express.static('img'))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

const PORT=5000
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})