import connection from './index';

export const query = (qryStr, values) => {
    return new Promise((resolve, reject) => {
        connection.query(qryStr, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};