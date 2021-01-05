import * as mongoose from "mongoose";

const TodoSchema: mongoose.Schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, default: 1 },
  isDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Todo", TodoSchema);
