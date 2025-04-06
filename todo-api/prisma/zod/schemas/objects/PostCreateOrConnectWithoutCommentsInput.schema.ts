import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutCommentsInputObjectSchema } from './PostCreateWithoutCommentsInput.schema';
import { PostUncheckedCreateWithoutCommentsInputObjectSchema } from './PostUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateOrConnectWithoutCommentsInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const PostCreateOrConnectWithoutCommentsInputObjectSchema = Schema;
