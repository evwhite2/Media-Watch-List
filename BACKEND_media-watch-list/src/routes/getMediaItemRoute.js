import Boom from '@hapi/boom';
import {db} from '../database';

export const getMediaItemRoute = {
    method: 'GET', 
    path: '/api/watchlist/{id}',
    handler: async (req, h)=>{
        const id = parseInt(req.params.id);
        const result  =  await db.query(`SELECT * FROM watchlist WHERE id  = ${id}`);
        if(result.results.length === 0) throw Boom.notFound(`Media item is not found for ID: ${id}`);
        return result.results;
    }
}