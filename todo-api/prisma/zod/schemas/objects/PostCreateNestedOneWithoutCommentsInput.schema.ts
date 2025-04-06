import { z } from 'zod';
import { PostCreateWithoutCommentsInputObjectSchema } from './PostCreateWithoutCommentsInput.schema';
import { PostUncheckedCreateWithoutCommentsInputObjectSchema } from './PostUncheckedCreateWithoutCommentsInput.schema';
import { PostCreateOrConnectWithoutCommentsInputObjectSchema } from './PostCreateOrConnectWithoutCommentsInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateNestedOneWithoutCommentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutCommentsInputObjectSchema),
        z.lazy(() => PostUncheckedCreateWithoutCommentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PostCreateOrConnectWithoutCommentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PostCreateNestedOneWithoutCommentsInputObjectSchema = Schema;
