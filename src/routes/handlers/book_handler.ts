import express,{Request ,Response} from "express";
import { Book,BookStore } from "../../models/book";

const book = express.Router();

const store = new BookStore;

book.get('/books',async (_req: Request , res :Response)  =>  {
    try {
        const books = await store.index()
        res.status(200)
        res.json(books)
    } catch (error) {
        res.status(404)
        res.json(error);
        console.log('faild')
        
    }
})

book.get('/book/:id',async (req:Request , res: Response) => {
    try {
        const book = await store.show(req.params.id)
        if (book.id =='') {
            res.send('book not found')
        }else{
            res.json(book)
        }
    } catch (error) {
        res.status(404)
        res.json(error)
    }
})

book.post('/book',async(req: Request , res : Response) => {
    try {
        const book = {
            title:req.body.title,
            author:req.body.author,
            total_pages: req.body.total_pages,
            summary: req.body.summary
        }
       const newBook = await store.create(book)
       res.json(newBook)
    } catch (error) {
        res.status(404)
        res.json(error)
    }
})

book.put('book/:id',(req: Request , res : Response) => {
    try {
        const book = {
            id: req.params.id, 
            title:req.body.title,
            author:req.body.author,
            total_pages: req.body.total_pages,
            summary: req.body.summary
        }
        res.send('this is the edite route')
    } catch (error) {
        res.status(404)
        res.json(error)
    }
})

book.delete('/book/:id',async(req:Request , res: Response) => {
    try {
       const deletebook = await store.delete(req.params.id)
       res.json(deletebook)
    } catch (error) {
        res.status(404)
        res.json(error)
    }
})

export default book;