import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

const allowedOrigins = ['http://localhost:3000', '배포사이트']

const cors = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  const { origin } = req.headers

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  } else {
    res.setHeader('Access-Control-Allow-Origin', '') // origin이 없거나 허용되지 않은 경우
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT"); // prettier-ignore
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"); // prettier-ignore

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  next()
}

export default cors
