import { PrismaClient, Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

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

    await prisma.movie.update({
        where: {
          id: movieId,
        },
        data: {
            commentCount: {
                increment: 1,
              },
        },
      })

    return {
        status: 'success',
        data: comment,
    }
};

export const findMany = async () => {
    const comments = await prisma.comment.findMany({
        select: {
            id: true,
            content: true,
            ipAddress: true,
            createdAt: true,
            movieId: true,
          },
          orderBy: {
            createdAt: "desc"
          }
      });

      return {
          status: 'success',
          message: 'Comments fetched successfully',
          data: {
              meta: {
                  count: comments.length
                },
              comments }
        };
};

