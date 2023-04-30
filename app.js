import express from 'express'
import api from 'api'

const app=express();
const port=3000;
app.get('/',(req,res)=>{
const sdk = api('@render-api/v1.0#dnrc1ulf088q9j');

    sdk.auth('rnd_s3ZIAoAAFqfNi0MEWwfYFnFTiSth');
    sdk.getServices({limit: '20'})
      .then(({ data }) => res.send(data))
      .catch(err => console.error(err));

})
    
app.listen(port,()=>{
    console.log("port: ",port)
})