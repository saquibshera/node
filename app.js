const express=require("express")

const app=express()



app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Headers","Origin,Content-Type,Accept","Access-Control-Allow-Credentials","true");
    res.setHeader("Access-Control-Allow-Methods","POST,PUT,PATCH,DELETE,GET,OPTIONS")
    req.next();
})
// app.use((req,res,next)=>{
//     console.log("hello")
//     next()
// })

// app.use((req,res)=>{
//     res.send("hello from express 2")
// })
app.get("/api/posts",(req,res,next)=>{
        const data=[
            {
                name:'Abhiram',
                profile:"btech"
            },
            {
                name:'shivam',
                profile:'mtech'
            },
            {
                name:'sneha',
                profile:'mca'
            }
        ]
        res.status(200).json({
            data:data,
            message:"data fetched successfully"
        })
 })
module.exports=app