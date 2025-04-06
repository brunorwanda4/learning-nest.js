import { z } from 'zod';
import { CommentCreateManyAuthorInputObjectSchema } from './CommentCreateManyAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CommentCreateManyAuthorInputObjectSchema),
      z.lazy(() => CommentCreateManyAuthorInputObjectSchema).array(),
    ]),
  })
  .strict();

export const CommentCreateManyAuthorInputEnvelopeObjectSchema = Schema;
