import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date().optional(),
      pubDate: z.coerce.date().optional(),
      description: z.string().optional().default(""),
      author: z.string().optional().default("Cédric"),
      image: z
        .object({
          url: image().or(z.string()),
          alt: z.string().default(""),
        })
        .optional(),
      tags: z.array(z.string()).optional().default([]),
      categories: z.array(z.string()).optional().default([]),
      comments: z.array(z.any()).optional().default([]),
      slug: z.string().optional(),
    }).transform((data) => {
      const pubDate = data.pubDate ?? data.date ?? new Date();
      const tags = data.tags && data.tags.length > 0 ? data.tags : (data.categories ?? []);
      return {
        ...data,
        pubDate,
        date: pubDate,
        tags,
      };
    }),
});

export const collections = {
  posts: postsCollection,
};
