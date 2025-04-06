import { z } from 'zod';
import { AddressCreateInputObjectSchema } from './AddressCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressNullableCreateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => AddressCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const AddressNullableCreateEnvelopeInputObjectSchema = Schema;
