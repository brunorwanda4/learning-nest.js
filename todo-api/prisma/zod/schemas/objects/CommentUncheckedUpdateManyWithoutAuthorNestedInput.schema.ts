import { z } from 'zod';
import { CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema';
import { CommentCreateOrConnectWithoutAuthorInputObjectSchema } from './CommentCreateOrConnectWithoutAuthorInput.schema';
import { CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { CommentCreateManyAuthorInputEnvelopeObjectSchema } from './CommentCreateManyAuthorInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './CommentUpdateManyWithWhereWithoutAuthorInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyAuthorInputEnvelopeObjectSchema)
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
            () => CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema,
            )
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

export const CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema =
  Schema;
