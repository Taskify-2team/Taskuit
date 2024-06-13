/* eslint-disable @typescript-eslint/dot-notation */
import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema({
  columnId: { type: Number, required: true },
  cardId: { type: Number, required: true },
  text: { type: String, required: true, default: '' },
  color: { type: String, required: true, default: '' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

const Tag = mongoose.models['Tag'] || mongoose.model('Tag', tagSchema)

export default Tag
