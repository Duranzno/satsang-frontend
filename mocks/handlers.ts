import { rest } from 'msw'

export const handlers = [
  rest.get("/categories", (_req, res, ctx) => res(ctx.json([
    [
      { id: "Meditation", name: "Meditation" },
      { id: "Yoga & Chill", name: "Yoga & Chill" },
      { id: "Eastern Meditation", name: "Eastern Meditation" },
      { id: "Chinese", name: "Chinese" },
      { id: "Taoism", name: "Taoism" },
      { id: "Christian", name: "Christian" },
    ]
  ]))),
  rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
  }),
  rest.get('/reviews', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text:
            'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ])
    )
  }),
]
