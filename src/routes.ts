import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import PlacesRepository from './repositories/PlacesRepository';

const routes = Router();

routes.post('/places', async (request, response) => {
    const { city, uf, description, image } = request.body;

    const placesRepository = getCustomRepository(PlacesRepository);

    const places = placesRepository.create({
        city,
        uf,
        description,
        image,
    })
    await placesRepository.save(places);
})


export default routes;