import { z } from 'zod';
import { UserCreateWithoutCommentInputObjectSchema } from './UserCreateWithoutCommentInput.schema';
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from './UserUncheckedCreateWithoutCommentInput.schema';
import { UserCreateOrConnectWithoutCommentInputObjectSchema } from './UserCreateOrConnectWithoutCommentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCommentInputObjectSchema = Schema;
