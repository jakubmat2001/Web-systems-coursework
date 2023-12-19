import createQuoteSchema from './quote.model.js';
import errorHandler from './dbErrorHandler.js';
import { calculateBudget, calcFudgeBudget } from './calc_budget.js';

const Quoote = createQuoteSchema('quotes');
const Quote2 = createQuoteSchema('quotes2');

const create = async (req, res) => {
  const { employeeName, workHours, workerType, humanResources } = req.body;
  const empId = req.profile._id;
  
  const budget = calculateBudget(workHours, workerType, humanResources);
  const fudgeBudget = calcFudgeBudget(budget);

  //if human resources from our form are null, set the value to 0 as default
  //add the human resources to the budget if any
  const quote = new Quoote({
    employeeName,
    workHours,
    workerType,
    humanResources: humanResources || 0, 
    budget: budget,
    fudgeBudget: fudgeBudget,
    empId,
  });

  try {
    await quote.save();
    res.status(200).json({ message: 'Quote created successfully', quote });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
//this fucntion is to display all the quotes in our project.js and view-only-project.js
const list = async (req, res) => {
  try {
    const quotes = await Quoote.find().populate('empId', 'name email');
    res.json(quotes);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
//updates the employees quote that lives in our database
const update = async (req, res) => {
  try {
    let quote = await Quoote.findById(req.params.quoteId);
    if (!quote) {
      return res.status(400).json({
        error: "Quote not found",
      });
    }
//attached the employeeId to the request object
    req.quoteEmployeeId = quote.empId;

  //ensure we update our budget upon new values being entered
 //saves the original budget to database along with out modified fudgebudget
    const updatedBudget = calculateBudget(req.body.workHours, req.body.workerType, req.body.humanResources);
    const updated_fudge_budget = calcFudgeBudget(updatedBudget);
    quote.budget = updatedBudget;
    quote.fudgeBudget = updated_fudge_budget;
    quote = Object.assign(quote, req.body);
    quote.updated = Date.now();

    await quote.save();
    res.status(200).json(quote);

  } catch (err) {
    
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
  
};


//read a single quote
const read = (req, res) => {
  return res.json(req.quote);
};


//removes the quote fron our database
const remove = async (req, res) => {

  try {
    let quote = req.quote;
    let deletedQuote = await Quoote.deleteOne({ _id: quote._id });
    res.status(200).json({ message: 'Quote deleted successfully', deletedQuote });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

//searches for a quote with a given id and adds on the employees id/email onto it to check it
//it is used to handle any route which will use /api/quotes/:quoteId' functionalites to remove/update quotes
const quoteByID = async (req, res, next, id) => {
  try {
    let quote = await Quoote.findById(id).populate('empId', 'name email');
    if (!quote)
      return res.status(400).json({ error: 'Quote not found' });
    req.quote = quote;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Could not retrieve quote' });
  }
};


////////////////////////////////////////////////For Quote 2 collection ///////////////////////////////////////////////////

//functionalites for the second collection used for our second project, not the most ideal
const create2 = async (req, res) => {
  const { employeeName, workHours, workerType, humanResources } = req.body;
  const empId = req.profile._id;
  
  const budget = calculateBudget(workHours, workerType, humanResources);
  const fudgeBudget = calcFudgeBudget(budget);

  const quote = new Quote2({
    employeeName,
    workHours,
    workerType,
    humanResources: humanResources || 0, 
    budget: budget,
    fudgeBudget: fudgeBudget,
    empId,
  });

  try {
    await quote.save();
    res.status(200).json({ message: 'Quote created successfully', quote });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};


const list2 = async (req, res) => {
  try {
    const quotes = await Quote2.find().populate('empId', 'name email');
    res.json(quotes);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};


const update2 = async (req, res) => {
  try {
    let quote = await Quote2.findById(req.params.quoteId2);
    if (!quote) {
      return res.status(400).json({
        error: "Quote2 not found",
      });
    }
    req.quoteEmployeeId = quote.empId;

    const updatedBudget = calculateBudget(req.body.workHours, req.body.workerType, req.body.humanResources);
    const updated_fudge_budget = calcFudgeBudget(updatedBudget);
    quote.budget = updatedBudget;
    quote.fudgeBudget = updated_fudge_budget;
    quote = Object.assign(quote, req.body);
    quote.updated = Date.now();


    await quote.save();
    res.status(200).json(quote);

  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};


const read2 = (req, res) => {
  return res.json(req.quote);
};


const remove2 = async (req, res) => {
  try {
    let quote = req.quote;
    let deletedQuote = await Quote2.deleteOne({ _id: quote._id });
    res.status(200).json({ message: 'Quote deleted successfully', deletedQuote });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};


const quoteByID2 = async (req, res, next, id) => {
  console.log("quoteByID2: ", id);
  try {
    let quote = await Quote2.findById(id).populate('empId', 'name email');
    console.log("Quote2 fetched: ", quote);
    if (!quote)
      return res.status(400).json({ error: 'Quote not found' });
    req.quote = quote;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Could not retrieve quote' });
  }
};

export default { create, create2, list, list2, quoteByID, quoteByID2, update, update2, remove, remove2, read, read2 };

