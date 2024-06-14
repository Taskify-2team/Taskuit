/* eslint-disable @typescript-eslint/dot-notation */
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
})

const User = mongoose.models['User'] || mongoose.model('User', userSchema)

export default User
