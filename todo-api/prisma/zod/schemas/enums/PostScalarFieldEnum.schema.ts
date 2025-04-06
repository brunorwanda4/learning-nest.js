import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'slug',
  'title',
  'body',
  'authorId',
  'createdAt',
  'updatedAt',
]);
