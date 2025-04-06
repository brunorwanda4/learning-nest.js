import { z } from 'zod';
import { CommentUpdateManyMutationInputObjectSchema } from './objects/CommentUpdateManyMutationInput.schema';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';

export const CommentUpdateManySchema = z.object({
  data: CommentUpdateManyMutationInputObjectSchema,
  where: CommentWhereInputObjectSchema.optional(),
});
