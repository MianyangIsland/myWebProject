const express = require('express');

const app = express();

app.use('/',(req,res)=>{
    res.send('欢饮来到勉县西部,这里是我生长的地方!');
})

app.use('/ak',(req,res)=>{
    res.send('张珂我爱你!');
})

app.use('zhao',(req,res)=>{
    res.send('感谢昭哥,昭哥永远是我大哥!');
})
app.listen(3000,()=>{
    console.log('3000 is runing !');
});