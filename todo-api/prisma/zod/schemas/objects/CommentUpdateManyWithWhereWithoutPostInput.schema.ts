import { z } from 'zod';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';
import { CommentUpdateManyMutationInputObjectSchema } from './CommentUpdateManyMutationInput.schema';
import { CommentUncheckedUpdateManyWithoutCommentsInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutPostInput> = z
  .object({
    where: z.lazy(() => CommentScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CommentUpdateManyMutationInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateManyWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpdateManyWithWhereWithoutPostInputObjectSchema = Schema;
