import { PrismaClient } from '@prisma/client';
import { adder } from '../../helpers/adder';

const prisma = new PrismaClient();

export const findMany = async (conditions) => {
    const characters = await prisma.character.findMany(conditions);
    const totalHeight = adder(characters);
      return {
          status: 'success',
          data: {
              meta: {
                  count: characters.length,
                  totalHeightInCM: `${totalHeight} cm`,
                  totalHeightInFT: `${(totalHeight * 0.0328084).toFixed(2)} ft`,
                  totalHeightInINCH: `${(totalHeight * 0.393701).toFixed(2)} ${(totalHeight * 0.393701) > 1 ? 'inches' : 'inch'}`
                },
              characters }
            };
};
