import { z } from 'zod';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';

export const CommentDeleteManySchema = z.object({
  where: CommentWhereInputObjectSchema.optional(),
});
