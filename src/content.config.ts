import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean().default(false),
      category: z.enum(["News", "Receipts", "Success Stories"]),
      coverImage: image(),
      excerpt: z.string(),
      author: z.string().default("Krisha"),
      publishDate: z.coerce.date(),
      featured: z.boolean().default(false),
      takeaway: z.string().optional(),
    }),
});

export const collections = { posts };