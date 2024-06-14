import dbConnect from '@/db/config'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '@/db/models/user'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { userId } = req.query

    switch (req.method) {
      case 'POST': {
        const existingUser = await User.findOne({ userId })

        if (!existingUser) {
          const newUser = await User.create({ userId })
          res.status(200).send({ data: newUser })
        } else {
          res.status(200).send({ data: existingUser })
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
