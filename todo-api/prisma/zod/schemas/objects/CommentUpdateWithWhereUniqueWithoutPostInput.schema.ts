import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutPostInputObjectSchema } from './CommentUpdateWithoutPostInput.schema';
import { CommentUncheckedUpdateWithoutPostInputObjectSchema } from './CommentUncheckedUpdateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CommentUpdateWithoutPostInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpdateWithWhereUniqueWithoutPostInputObjectSchema = Schema;
