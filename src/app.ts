
import express from 'express';
import routes from './routes/main';
import students from './routes/api/students';
import teacher from './routes/api/teacher';
import convert from './routes/api/convert';

const app= express();
const port = 3000;

app.use('/api',routes);
app.use('/api',students);
app.use('/api',teacher);
app.use('/api',convert);


app.listen(port,()=>{
    console.log(`server started on localhost ${port}`);
});