import { z } from 'zod';
import { CommentCreateWithoutPostInputObjectSchema } from './CommentCreateWithoutPostInput.schema';
import { CommentUncheckedCreateWithoutPostInputObjectSchema } from './CommentUncheckedCreateWithoutPostInput.schema';
import { CommentCreateOrConnectWithoutPostInputObjectSchema } from './CommentCreateOrConnectWithoutPostInput.schema';
import { CommentCreateManyPostInputEnvelopeObjectSchema } from './CommentCreateManyPostInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPostInputObjectSchema),
          z.lazy(() => CommentCreateWithoutPostInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutPostInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPostInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutPostInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema =
  Schema;
