import { z } from 'zod';
import { CommentCreateManyPostInputObjectSchema } from './CommentCreateManyPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyPostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CommentCreateManyPostInputObjectSchema),
      z.lazy(() => CommentCreateManyPostInputObjectSchema).array(),
    ]),
  })
  .strict();

export const CommentCreateManyPostInputEnvelopeObjectSchema = Schema;
