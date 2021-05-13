import { Repository, EntityRepository } from 'typeorm';
import Place from '../entities/Place';

@EntityRepository(Place)
class PlacesRepository extends Repository<Place> {

};

export default PlacesRepository;