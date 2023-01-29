var express=require('express');
var router=express.Router();
var http=require('http');
const fetch=require('node-fetch')

router.get('/get_data', function(request, response){
    var country=[
        {id:1,
        name:"India"},
        {id:2,
            name:"Qatar"},
            {id:3,
                name:"Pakistan"},
                {id:4,
                    name:"London"},
                    {id:5,
                        name:"Brazil"},
                        {id:6,
                            name:"Canada"},
                            {id:7,
                                name:"Australia"},
                                {id:8,
                                    name:"London"},
                                    {id:9,
                                        name:"Bangladesh"},
                                        {id:10,
                                            name:"Oman"},]
    

response.json(country)
    


})



module.exports=router;
