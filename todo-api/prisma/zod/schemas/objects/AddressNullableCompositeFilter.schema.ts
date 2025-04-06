import { z } from 'zod';
import { AddressObjectEqualityInputObjectSchema } from './AddressObjectEqualityInput.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => AddressObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => AddressWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AddressWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const AddressNullableCompositeFilterObjectSchema = Schema;
