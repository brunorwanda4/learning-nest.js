import { z } from 'zod';
import { UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';
import { UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema';
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPostsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPostsInputObjectSchema = Schema;
