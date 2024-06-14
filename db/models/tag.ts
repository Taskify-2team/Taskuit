/* eslint-disable @typescript-eslint/dot-notation */
import mongoose from 'mongoose'

const tagsSchema = new mongoose.Schema({
  text: { type: String, required: true },
  color: { type: String, required: true },
})

const tagSchema = new mongoose.Schema({
  columnId: { type: Number, required: true, unique: true },
  cardId: { type: Number, required: true, unique: true },
  tags: [tagsSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

const Tag = mongoose.models['Tag'] || mongoose.model('Tag', tagSchema)

export default Tag
