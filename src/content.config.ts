import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		slug: z.string().optional(),
		categories: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		comments: z.array(z.any()).optional(),
	}),
});

export const collections = { posts };
