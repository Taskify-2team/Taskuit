import dbConnect from '@/db/config'
import Tag from '@/db/models/tag'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()

    switch (req.method) {
      case 'POST': {
        const newTag = await Tag.create(req.body)
        res.status(200).send(newTag)
        break
      }

      case 'GET': {
        const foundTag = await Tag.find()
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
