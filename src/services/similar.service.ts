import Film from '../database/models/Film'

import { shuffle } from '../helpers/arr.shuffle'

export class SimilarService {
  static async byTags (tags: Array<string>) {
    const result = await Film.find({ tags: { $in: tags }}, { img: 1, name: 1 })

    return shuffle(result)
  }
}