import mongoose from 'mongoose'
const ordersSchema = mongoose.Schema({
  email: { type: String },
  orderValue: { type: String },
});

export default mongoose.model("Orders", ordersSchema);