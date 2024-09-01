import {Product} from '../model/products';
import {connection} from '../Config/db';
import {PoolConnection} from 'mysql2';

export const selectAll = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err:any, conn: PoolConnection) => {
            conn.query("select * from proucts", (err, resultSet: Product[]) => {
                conn.release();
                if (err) {
                    return reject(err);
                }
                return resolve(resultSet);
            });
        });
    });
}
// export default { selectAll };