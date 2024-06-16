/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from '@/db/config'
import Tag from '@/db/models/tag'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { userId, columnId } = req.query

    switch (req.method) {
      case 'POST': {
        const { cardId, tags } = req.body
        const foundTag = await Tag.findOne({ cardId })
        if (foundTag) {
          const updateTag = await Tag.findOneAndUpdate(
            { cardId },
            { tags, columnId },
            { new: true },
          )
          res.status(201).send({ data: updateTag })
        } else {
          const newTag = await Tag.create({
            columnId,
            cardId,
            tags,
            user: userId,
          })
          res.status(201).send({ data: newTag })
        }
        break
      }

      case 'GET': {
        const foundTag = await Tag.find({ columnId })
        res.status(200).send({ data: foundTag })
        break
      }

      default: {
        res.status(404).send('Not Found')
        break
      }
    }
  })
}

export default handler
