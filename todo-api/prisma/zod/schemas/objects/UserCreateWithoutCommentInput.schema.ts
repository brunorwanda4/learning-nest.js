import { z } from 'zod';
import { AddressNullableCreateEnvelopeInputObjectSchema } from './AddressNullableCreateEnvelopeInput.schema';
import { AddressCreateInputObjectSchema } from './AddressCreateInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutCommentInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string(),
    address: z
      .union([
        z.lazy(() => AddressNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => AddressCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    password: z.string().optional().nullable(),
    role: z.lazy(() => UserRoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutCommentInputObjectSchema = Schema;
