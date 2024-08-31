import {Router} from 'express'; 
import productController from '../Controller/product.controller';

const productRouter = Router();

productRouter.get('/',productController.getAllProducts);

export default productRouter;