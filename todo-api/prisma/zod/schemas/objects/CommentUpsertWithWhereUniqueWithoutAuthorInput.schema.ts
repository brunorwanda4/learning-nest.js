import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAuthorInputObjectSchema } from './CommentUpdateWithoutAuthorInput.schema';
import { CommentUncheckedUpdateWithoutAuthorInputObjectSchema } from './CommentUncheckedUpdateWithoutAuthorInput.schema';
import { CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema;
