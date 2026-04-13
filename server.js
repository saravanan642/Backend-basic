const Express = require("express")
const app = Express()   

const port = 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



const a= 20
const b=30
const value = a+b 
console.log(value);

app.get("/",(req,res)=>{
    res.send("tha values is " + value)
});

