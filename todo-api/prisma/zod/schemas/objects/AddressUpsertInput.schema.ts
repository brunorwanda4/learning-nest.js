import { z } from 'zod';
import { AddressCreateInputObjectSchema } from './AddressCreateInput.schema';
import { AddressUpdateInputObjectSchema } from './AddressUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressUpsertInput> = z
  .object({
    set: z.lazy(() => AddressCreateInputObjectSchema).nullable(),
    update: z.lazy(() => AddressUpdateInputObjectSchema),
  })
  .strict();

export const AddressUpsertInputObjectSchema = Schema;
