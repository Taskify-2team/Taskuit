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
        const foundAuthorId = req.query.userId
        const idMatch = await Tag.find({ user: foundAuthorId })
        if (idMatch) {
          await Tag.findByIdAndDelete(id)
          res.status(204).end()
        } else {
          res.status(404).send({ message: '삭제 권한이 없습니다.' })
        }
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
