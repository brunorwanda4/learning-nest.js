import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAuthorInputObjectSchema } from './CommentUpdateWithoutAuthorInput.schema';
import { CommentUncheckedUpdateWithoutAuthorInputObjectSchema } from './CommentUncheckedUpdateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
