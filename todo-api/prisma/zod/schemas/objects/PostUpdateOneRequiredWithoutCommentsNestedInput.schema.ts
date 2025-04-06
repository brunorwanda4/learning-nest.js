import { z } from 'zod';
import { PostCreateWithoutCommentsInputObjectSchema } from './PostCreateWithoutCommentsInput.schema';
import { PostUncheckedCreateWithoutCommentsInputObjectSchema } from './PostUncheckedCreateWithoutCommentsInput.schema';
import { PostCreateOrConnectWithoutCommentsInputObjectSchema } from './PostCreateOrConnectWithoutCommentsInput.schema';
import { PostUpsertWithoutCommentsInputObjectSchema } from './PostUpsertWithoutCommentsInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCommentsInputObjectSchema } from './PostUpdateWithoutCommentsInput.schema';
import { PostUncheckedUpdateWithoutCommentsInputObjectSchema } from './PostUncheckedUpdateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput> =
  z
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
      upsert: z
        .lazy(() => PostUpsertWithoutCommentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithoutCommentsInputObjectSchema),
          z.lazy(() => PostUncheckedUpdateWithoutCommentsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema =
  Schema;
