import mongooseDelete from 'mongoose-delete'
import mongoose from 'mongoose'
import * as db from '../../../infra/db/connection'

const schema = new mongoose.Schema({
  name: { type: mongoose.Types.ObjectId, rel: 'User', required: true },
  address: { type: String, required: true },
  status: { type: Boolean, required: true }
}, { versionKey: false, timestamps: true })

schema.plugin(mongooseDelete, { overrideMethods: true })

module.exports.Post = db._connection.model('Post', schema)
