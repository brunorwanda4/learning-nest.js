import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentDeleteOneSchema = z.object({
  where: CommentWhereUniqueInputObjectSchema,
});
