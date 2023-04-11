import mongoose from 'mongoose';

//Our quote schema containing all the variables which were specified in requriment section
//Note that the human resources aren't required, it also contains our fudgebudget for frontend

const createQuoteSchema = (collectionName) => {
  console.log('Collection name:', collectionName);
  const QuoteSchema = new mongoose.Schema({
    employeeName: {
      type: String,
      required: true
    },
    workHours: {
      type: Number,
      required: true
    },
    workerType: {
      type: String,
      enum: ['junior', 'mid-senior', 'senior'],
      required: true
    },
    humanResources: {
      type: Number,
      default: 0
    },
    budget: {
      type: Number,
      required: true
    },
    fudgeBudget: {
      type: Number,
    },
    empId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Emp',
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    updated: Date
  });

  return mongoose.model(collectionName, QuoteSchema);
};

export default createQuoteSchema;