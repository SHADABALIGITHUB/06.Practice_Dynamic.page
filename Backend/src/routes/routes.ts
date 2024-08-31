import { Router } from "express"; 
import productRouter from "./product.route";
const route=Router();

route.use('/product',productRouter);

export default route;
