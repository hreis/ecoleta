import knex from '../database/connection';
import { Request, Response } from 'express';

class PointsController {
    async create(req: Request, res: Response) {

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            itens
        } = req.body;
    
        const trx = await knex.transaction();

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
    
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItens = itens.map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        });
    
        await trx('point-itens').insert(pointItens);

        await trx.commit();
    
        return res.json({ 
            id: point_id,
            ...point, });
    }

    async show(req: Request, res: Response) {
        const id = req.params.id;

        const point = await knex('points').where('id', id).first();

        if(!point) {
            return res.status(400).json({ message: 'Point not Found.' })
        }

        const itens = await knex('itens')
        .join('point_itens', 'itens_id', '=', 'point_itens.item.id')
        .where('point_itens.point_id', id)
        .select('itens.title');

        return res.json({ point, itens });
    }

    async index(req: Request, res: Response) {

        const { city, uf, itens } = req.query;

        const parsedItens = String(itens).split(',').map(x => Number(x.trim()));

        const points = await knex('points')
        .join('point_itens', 'points.id', '=', 'point_itens.point_id')
        .whereIn('point_itens.item_id', parsedItens)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*');

        return res.json(points);
    }
    
}

export default PointsController; 