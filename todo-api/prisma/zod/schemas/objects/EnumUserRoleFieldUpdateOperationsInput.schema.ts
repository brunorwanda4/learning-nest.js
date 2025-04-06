import { z } from 'zod';
import { UserRoleSchema } from '../enums/UserRole.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => UserRoleSchema).optional(),
  })
  .strict();

export const EnumUserRoleFieldUpdateOperationsInputObjectSchema = Schema;
