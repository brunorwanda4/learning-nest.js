import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'authorId',
  'comment',
  'postId',
  'createdAt',
  'updatedAt',
]);
