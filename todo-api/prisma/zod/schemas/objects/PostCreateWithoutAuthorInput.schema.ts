import { z } from 'zod';
import { CommentCreateNestedManyWithoutPostInputObjectSchema } from './CommentCreateNestedManyWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    body: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutPostInputObjectSchema)
      .optional(),
  })
  .strict();

export const PostCreateWithoutAuthorInputObjectSchema = Schema;
