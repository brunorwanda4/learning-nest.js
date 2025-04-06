import { z } from 'zod';
import { CommentCreateWithoutPostInputObjectSchema } from './CommentCreateWithoutPostInput.schema';
import { CommentUncheckedCreateWithoutPostInputObjectSchema } from './CommentUncheckedCreateWithoutPostInput.schema';
import { CommentCreateOrConnectWithoutPostInputObjectSchema } from './CommentCreateOrConnectWithoutPostInput.schema';
import { CommentUpsertWithWhereUniqueWithoutPostInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutPostInput.schema';
import { CommentCreateManyPostInputEnvelopeObjectSchema } from './CommentCreateManyPostInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutPostInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutPostInput.schema';
import { CommentUpdateManyWithWhereWithoutPostInputObjectSchema } from './CommentUpdateManyWithWhereWithoutPostInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutPostInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutPostInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CommentUpdateWithWhereUniqueWithoutPostInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutPostInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutPostInputObjectSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutPostInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputObjectSchema),
          z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema =
  Schema;
