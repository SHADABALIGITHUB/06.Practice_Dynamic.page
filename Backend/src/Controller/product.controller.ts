import {Request,Response } from "express";
import {Product} from '../model/products';
import {connection} from '../Config/db'
import {PoolConnection } from 'mysql2';



const getAllProducts = (req:Request,res:Response)=>{

    connection.getConnection((err: Error|null, conn: PoolConnection) => {
        if (err) {
            res.status(500).send({
                message: 'INTERNAL SERVER ERROR',
                result: null
            });
            return;
        }
        conn.query("select * from proucts", (err:Error|null, resultSet: Product[]) => {
            conn.release();
            if (err) {
                res.status(500).send({
                    message: 'INTERNAL SERVER ERROR',
                    result: null
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    result: resultSet
                });
            }
        })
    });
   

    
}

export default {getAllProducts};