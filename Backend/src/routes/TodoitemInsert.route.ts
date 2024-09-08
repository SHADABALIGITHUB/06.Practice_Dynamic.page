import { Router } from 'express';
import TodoitemInsert from '../Controller/TodoitemInsert.controller';


const InsertItemRouter=Router();


InsertItemRouter.post('/',TodoitemInsert.insertItem);

export default InsertItemRouter;
