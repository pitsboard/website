import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sectionsCollection = defineCollection({
  loader: glob({ base: './src/content/sections', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number()
  })
});

const researchCollection = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    author: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  'sections': sectionsCollection,
  'research': researchCollection
};
