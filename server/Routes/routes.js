const express = require('express');
const Routes = express.Router();


Routes.get('samples',(req,resp)=>{

  resp.send('hello');

})