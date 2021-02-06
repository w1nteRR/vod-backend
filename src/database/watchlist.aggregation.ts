export const aggregation = (sub: string) => [
  [
    {
      $match: {
        userId: sub
      }
    },
    {
      $lookup: {
        from: 'films',
        localField: 'watchlist',
        foreignField: '_id',
        as: 'films'
      }
    },
    {
      $project: {
        _id: 0,
        films: {
          name: 1,
          _id: 1,
          img: 1
        }
      }
    }
  ]
]
