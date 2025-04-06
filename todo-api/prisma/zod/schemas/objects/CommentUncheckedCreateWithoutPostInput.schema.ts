import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    authorId: z.string(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const CommentUncheckedCreateWithoutPostInputObjectSchema = Schema;
