import { z } from 'zod';
import { CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema';
import { CommentCreateOrConnectWithoutAuthorInputObjectSchema } from './CommentCreateOrConnectWithoutAuthorInput.schema';
import { CommentCreateManyAuthorInputEnvelopeObjectSchema } from './CommentCreateManyAuthorInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyAuthorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutAuthorInputObjectSchema =
  Schema;
