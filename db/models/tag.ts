/* eslint-disable @typescript-eslint/dot-notation */
import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema({
  cardId: { type: Number, required: true, default: '' },
  content: { type: String, required: true, default: '' },
  backgroundColor: {
    type: String,
    required: true,
    default: '',
  },
  textColor: { type: String, required: true, default: '' },
})

const Tag = mongoose.models['Tag'] || mongoose.model('Tag', tagSchema)

export default Tag
