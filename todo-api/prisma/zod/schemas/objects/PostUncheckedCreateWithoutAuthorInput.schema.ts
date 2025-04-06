import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    body: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema)
      .optional(),
  })
  .strict();

export const PostUncheckedCreateWithoutAuthorInputObjectSchema = Schema;
