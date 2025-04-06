import { z } from 'zod';
import { CommentUpdateInputObjectSchema } from './objects/CommentUpdateInput.schema';
import { CommentUncheckedUpdateInputObjectSchema } from './objects/CommentUncheckedUpdateInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentUpdateOneSchema = z.object({
  data: z.union([
    CommentUpdateInputObjectSchema,
    CommentUncheckedUpdateInputObjectSchema,
  ]),
  where: CommentWhereUniqueInputObjectSchema,
});
