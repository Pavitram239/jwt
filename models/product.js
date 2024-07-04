import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "description is required"],
    min: 0,
    default: 0,
  },
});

export default mongoose.model("Product", productSchema);
