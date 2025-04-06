import { z } from 'zod';
import { UserRoleSchema } from '../enums/UserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = z
  .object({
    equals: z.lazy(() => UserRoleSchema).optional(),
    in: z
      .union([
        z.lazy(() => UserRoleSchema).array(),
        z.lazy(() => UserRoleSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => UserRoleSchema).array(),
        z.lazy(() => UserRoleSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => UserRoleSchema),
        z.lazy(() => NestedEnumUserRoleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumUserRoleFilterObjectSchema = Schema;
