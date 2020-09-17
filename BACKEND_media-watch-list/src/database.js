import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'media_watch_list'
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject)=>{
        connection.query(queryString, escapedValues, (error, results, fields) =>{
            if(error) reject(error);
            resolve({results, fields});
        });
    }),
    end: () => connection.end(),
}