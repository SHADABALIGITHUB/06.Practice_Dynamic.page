import {Request,Response} from 'express';
import { TodoItem } from '../model/Todoitem';
import { connection } from '../Config/db';
import { PoolConnection } from 'mysql2';

const insertItem = (req:Request,res:Response)=>{
    const id=req.body.id;
    const dateOfCreation=req.body.dateOfCreation;
    const dateOfUpdate=req.body.dateOfUpdate;
    const assignTo=req.body.assignTo;
    const status=req.body.status;
    const currentlyForwardedTo=req.body.currentlyForwardedTo;
    
    const item:TodoItem={
        id:id,
        dateOfCreation:dateOfCreation,
        dateOfUpdate:dateOfUpdate,
        assignTo:assignTo,
        status:status,
        currentlyForwardedTo:currentlyForwardedTo
    }

    connection.getConnection((err:any,conn:PoolConnection)=>{
        conn.query("insert into TodoItems set ?",item,(err:Error|null,result:any)=>{
            conn.release();
            if(err){
                res.status(500).send({
                    message:'INTERNAL ERROR IN INSERTING DATA',
                    result:null
                });
            }else{
                res.status(200).send({
                    message:'OK',
                    result:result
                });
            }
            
        });
        
        });
    }

export default {insertItem};