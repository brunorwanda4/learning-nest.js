import { z } from 'zod';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserRoleFilterObjectSchema } from './NestedEnumUserRoleFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumUserRoleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumUserRoleWithAggregatesFilterObjectSchema = Schema;
