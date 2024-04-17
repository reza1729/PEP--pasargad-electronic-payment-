import { IRectangle } from '../Controller/Controller';
import db from '../DataBase';
import { rectangle } from '../Models/rectangles'


export const saveRectangle = async (payload: IRectangle): Promise<rectangle> => {
  const recRepository = db.getRepository(rectangle);
  const rec = new rectangle()
  return await recRepository.save({
    ...rec,
    ...payload
  })
}

export const getAll = async (): Promise<rectangle[]> => {
    const recRepository = db.getRepository(rectangle);
    return await recRepository.find();
}
