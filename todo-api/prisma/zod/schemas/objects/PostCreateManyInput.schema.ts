import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    body: z.string(),
    authorId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const PostCreateManyInputObjectSchema = Schema;
