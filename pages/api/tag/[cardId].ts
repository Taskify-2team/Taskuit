import dbConnect from '@/db/config'
import Tag from '@/db/models/tag'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { cardId } = req.query

    switch (req.method) {
      case 'PATCH': {
        const updateTag = await Tag.findByIdAndUpdate(cardId, req.body, {
          new: true,
        })
        res.status(200).send(updateTag)
        break
      }

      case 'GET': {
        const foundTag = await Tag.findById(cardId)
        res.status(200).send(foundTag)
        break
      }

      // case 'DELETE': {
      //   const foundTag = await Tag.findById(id)
      //   await Tag.findByIdAndDelete(foundTag.__id)
      //   res.status(204).end()
      //   break
      // }

      default: {
        res.status(404).send('Not Found')
        break
      }
    }
  })
}

export default handler
