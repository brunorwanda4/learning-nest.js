import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentFindUniqueSchema = z.object({
  where: CommentWhereUniqueInputObjectSchema,
});
