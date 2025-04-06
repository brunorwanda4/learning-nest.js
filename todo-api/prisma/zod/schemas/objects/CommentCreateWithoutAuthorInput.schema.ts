import { z } from 'zod';
import { PostCreateNestedOneWithoutCommentsInputObjectSchema } from './PostCreateNestedOneWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputObjectSchema),
  })
  .strict();

export const CommentCreateWithoutAuthorInputObjectSchema = Schema;
