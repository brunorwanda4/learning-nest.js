import { z } from 'zod';
import { CommentWhereInputObjectSchema } from './CommentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentListRelationFilter> = z
  .object({
    every: z.lazy(() => CommentWhereInputObjectSchema).optional(),
    some: z.lazy(() => CommentWhereInputObjectSchema).optional(),
    none: z.lazy(() => CommentWhereInputObjectSchema).optional(),
  })
  .strict();

export const CommentListRelationFilterObjectSchema = Schema;
