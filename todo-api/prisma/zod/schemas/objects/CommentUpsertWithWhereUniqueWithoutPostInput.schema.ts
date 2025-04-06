import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutPostInputObjectSchema } from './CommentUpdateWithoutPostInput.schema';
import { CommentUncheckedUpdateWithoutPostInputObjectSchema } from './CommentUncheckedUpdateWithoutPostInput.schema';
import { CommentCreateWithoutPostInputObjectSchema } from './CommentCreateWithoutPostInput.schema';
import { CommentUncheckedCreateWithoutPostInputObjectSchema } from './CommentUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutPostInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CommentUpdateWithoutPostInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CommentCreateWithoutPostInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpsertWithWhereUniqueWithoutPostInputObjectSchema = Schema;
