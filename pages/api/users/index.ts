import dbConnect from '@/db/config'
import cors from '@/db/middlewares/cors'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '@/db/models/user'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  cors(req, res, async () => {
    await dbConnect()
    const { userId } = req.body

    switch (req.method) {
      case 'POST': {
        const existingUser = await User.findOne({ userId })

        if (!existingUser) {
          const newUser = await User.create({ userId })
          res.status(200).send(newUser)
        } else {
          res.status(409).send({ message: '이미 존재하는 회원입니다.' })
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
