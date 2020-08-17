//Calling an API using REQUEST Object

const request = require("request");
const express = require("express");
var app = express();
const chalk = require("chalk");


app.get("/getdetails/:id",(req,res)=>{
    var employeeid = req.params.id;
var promise = new Promise((resolve)=>{
                    request("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees",{json:true},(err,response,body)=>{
                                console.log("The data from the Api is ");
                                console.log(chalk.green(JSON.stringify(body,null,2)));

                                var filteredemployee = body.filter((singledata)=>{
                                    // console.log(chalk.green("The data inside filter is "))
                                    // console.log(JSON.stringify(singledata));
                                    return singledata.id == employeeid? true:false;
                                });
                        resolve(filteredemployee)     
                    });
            
                 });
        promise.then((data)=>{
            console.log("The data after resolving is ");
            console.log(JSON.stringify(data));
            res.send(JSON.stringify(data));
        });

});


app.listen(3000,()=>{
    console.log(chalk.blue("App is running on the port 3000"));
});