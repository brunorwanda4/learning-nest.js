import { z } from 'zod';
import { CommentCreateManyInputObjectSchema } from './objects/CommentCreateManyInput.schema';

export const CommentCreateManySchema = z.object({
  data: z.union([
    CommentCreateManyInputObjectSchema,
    z.array(CommentCreateManyInputObjectSchema),
  ]),
});
