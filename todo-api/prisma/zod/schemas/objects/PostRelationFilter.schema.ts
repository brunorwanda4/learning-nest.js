import { z } from 'zod';
import { PostWhereInputObjectSchema } from './PostWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostRelationFilter> = z
  .object({
    is: z
      .lazy(() => PostWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PostWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PostRelationFilterObjectSchema = Schema;
