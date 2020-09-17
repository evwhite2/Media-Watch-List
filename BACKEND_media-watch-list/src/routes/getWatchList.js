import {db} from '../database';

export const getWatchListRoute = {
    method: 'GET',
    path: '/api/watchlist',
    handler: async (req, h)=>{
       const { results } = await db.query('SELECT * FROM watchlist');
       return results;
    }
}