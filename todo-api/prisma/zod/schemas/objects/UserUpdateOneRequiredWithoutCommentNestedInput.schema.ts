import { z } from 'zod';
import { UserCreateWithoutCommentInputObjectSchema } from './UserCreateWithoutCommentInput.schema';
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from './UserUncheckedCreateWithoutCommentInput.schema';
import { UserCreateOrConnectWithoutCommentInputObjectSchema } from './UserCreateOrConnectWithoutCommentInput.schema';
import { UserUpsertWithoutCommentInputObjectSchema } from './UserUpsertWithoutCommentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCommentInputObjectSchema } from './UserUpdateWithoutCommentInput.schema';
import { UserUncheckedUpdateWithoutCommentInputObjectSchema } from './UserUncheckedUpdateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCommentInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutCommentInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCommentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCommentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCommentInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCommentNestedInputObjectSchema =
  Schema;
