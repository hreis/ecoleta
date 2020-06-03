import knex from '../database/connection';
import { Request, Response } from 'express';

class ItensController {
    async index(req: Request, res: Response) {

        const itens = await knex('itens').select('*');
        
        const serializedItens = itens.map(item => {
            return { 
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
    
            }
        })
    
        return res.json(serializedItens);
    
    }
}

export default ItensController;