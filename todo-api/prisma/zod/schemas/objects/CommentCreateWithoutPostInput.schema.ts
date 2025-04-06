import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from './UserCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    author: z.lazy(() => UserCreateNestedOneWithoutCommentInputObjectSchema),
  })
  .strict();

export const CommentCreateWithoutPostInputObjectSchema = Schema;
