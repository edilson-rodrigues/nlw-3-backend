import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanege from '../models/Orphanage';
import orphanages_views from '../views/orphanages_views';

export default {
  async index(request: Request, response: Response) {

    const orphanagesRepository = getRepository(Orphanege);

    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });

    return response.json(orphanages_views.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanege);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orphanages_views.render(orphanage));
  },


  async create(request: Request, response: Response) {


    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanege);

    const requestImage = request.files as Express.Multer.File[];
    const images = requestImage.map(image => {
      return { path: image.filename }
    });


    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json({ orphanage });
  }
};