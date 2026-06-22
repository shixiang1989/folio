import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        date: z.string().optional(),
        category: z.enum(['reading', 'life', '']).optional(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional(),
      }),
    }),
  },
})
