import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now(),
  },
});

const EmailModel = mongoose.models.email || mongoose.model("email", Schema);

export default EmailModel;
