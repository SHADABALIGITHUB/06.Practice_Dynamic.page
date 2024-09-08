import { Router } from "express"; 
import productRouter from "./product.route";
import InsertItemRouter from "./TodoitemInsert.route";
const route=Router();

route.use('/product',productRouter);
route.use('/insert',InsertItemRouter);

export default route;
