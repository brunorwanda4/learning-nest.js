import { z } from 'zod';
import { AddressCreateInputObjectSchema } from './AddressCreateInput.schema';
import { AddressUpsertInputObjectSchema } from './AddressUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => AddressCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => AddressUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const AddressNullableUpdateEnvelopeInputObjectSchema = Schema;
