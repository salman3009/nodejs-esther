const file = require('fs/promises');

const writeFile = async()=>{
    try{
        let content = "welcome to nodejs and we will learn the new technology";
        await file.writeFile('data/newton.txt',content);
        //1st argument - filename 
        //2nd arugment - file content
        console.log("file is created successfully");
    }catch(err){
       console.log(err);  
    }
}
writeFile();