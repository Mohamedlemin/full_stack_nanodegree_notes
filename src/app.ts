
import express from 'express';
import routes from './routes/main';
import students from './routes/api/students';
import teacher from './routes/api/teacher';
import convert from './routes/api/convert';
import book from './routes/handlers/book_handler';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express();
const port = 3000;

const corsOptions ={
    origin:'http://google.com',
    optionsSuccessStatus : 200
}
// app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/api',routes);
app.use('/api',students);
app.use('/api',teacher);
app.use('/api',convert);
app.use('/api',book);



app.listen(port,()=>{
    console.log(`server started on localhost ${port}`);
});