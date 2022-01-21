import { PrismaClient, Prisma } from '@prisma/client';
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();

export const add = async (details) => {
    const { movieId, content, ipAddress } = details;
    const comment = await prisma.comment.create({
        data: {
            id: uuidv4(),
            movieId,
            content,
            ipAddress,
        }
    });

    return {
        status: 'success',
        data: comment,
    }
};
