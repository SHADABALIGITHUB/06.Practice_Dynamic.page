import express,{Express ,Request,Response} from 'express';
import dotenv from 'dotenv';
import * as BodyParser from 'body-parser';
import routes from './routes/routes';

dotenv.config();


const app:Express = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;


app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');
})

app.use('/api',routes);



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})