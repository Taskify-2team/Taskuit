/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from '@/db/config'
import Tag from '@/db/models/tag'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { id } = req.query

    switch (req.method) {
      case 'DELETE': {
        await Tag.findByIdAndDelete(id)
        res.status(204).end()
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
