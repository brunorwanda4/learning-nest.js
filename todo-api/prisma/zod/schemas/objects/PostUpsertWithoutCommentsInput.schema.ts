import { z } from 'zod';
import { PostUpdateWithoutCommentsInputObjectSchema } from './PostUpdateWithoutCommentsInput.schema';
import { PostUncheckedUpdateWithoutCommentsInputObjectSchema } from './PostUncheckedUpdateWithoutCommentsInput.schema';
import { PostCreateWithoutCommentsInputObjectSchema } from './PostCreateWithoutCommentsInput.schema';
import { PostUncheckedCreateWithoutCommentsInputObjectSchema } from './PostUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpsertWithoutCommentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PostUpdateWithoutCommentsInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutCommentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpsertWithoutCommentsInputObjectSchema = Schema;
