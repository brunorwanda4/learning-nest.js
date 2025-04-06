import { z } from 'zod';
import { UserUpdateWithoutCommentInputObjectSchema } from './UserUpdateWithoutCommentInput.schema';
import { UserUncheckedUpdateWithoutCommentInputObjectSchema } from './UserUncheckedUpdateWithoutCommentInput.schema';
import { UserCreateWithoutCommentInputObjectSchema } from './UserCreateWithoutCommentInput.schema';
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from './UserUncheckedCreateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCommentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCommentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCommentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCommentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCommentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCommentInputObjectSchema = Schema;
