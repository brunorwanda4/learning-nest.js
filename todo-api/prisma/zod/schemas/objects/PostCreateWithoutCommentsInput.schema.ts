import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutCommentsInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    body: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    author: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema),
  })
  .strict();

export const PostCreateWithoutCommentsInputObjectSchema = Schema;
