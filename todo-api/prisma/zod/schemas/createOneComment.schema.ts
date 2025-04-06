import { z } from 'zod';
import { CommentCreateInputObjectSchema } from './objects/CommentCreateInput.schema';
import { CommentUncheckedCreateInputObjectSchema } from './objects/CommentUncheckedCreateInput.schema';

export const CommentCreateOneSchema = z.object({
  data: z.union([
    CommentCreateInputObjectSchema,
    CommentUncheckedCreateInputObjectSchema,
  ]),
});
