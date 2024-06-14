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
        const newTag = await Tag.create({
          columnId,
          cardId,
          tags,
          user: userId,
        })
        res.status(201).send({ data: newTag })
        break
      }

      case 'PUT': {
        const { cardId, tags } = req.body
        const updateTag = await Tag.findOneAndUpdate(
          { user: userId, columnId, cardId },
          { tags, columnId },
          { new: true },
        )
        res.status(201).send({ data: updateTag })
        break
      }

      case 'GET': {
        const foundTag = await Tag.find({ user: userId, columnId })
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
