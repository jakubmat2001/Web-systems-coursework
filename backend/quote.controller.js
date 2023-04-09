import Quote from './quote.model.js';
import errorHandler from './dbErrorHandler.js';

const create = async (req, res) => {
  const { employeeName, workHours, workerType, humanResources } = req.body;
  const empId = req.profile._id;

  //set the pay rate for each of the classes of workertype
  //then multiply the hours by the payrate
  let budget = 0;
  if (workerType === 'junior') {
    budget = workHours * 10;
  } else if (workerType === 'mid-senior') {
    budget = workHours * 20;
  } else if (workerType === 'senior') {
    budget = workHours * 30;
  }

  //if human resources from our form are null, set the value to 0 as default
  //add the human resources to the budget if any
  const quote = new Quote({
    employeeName,
    workHours,
    workerType,
    humanResources: humanResources || 0, 
    budget: budget + (humanResources || 0),
    empId,
  });

  try {
    await quote.save();
    console.log("saving quote")
    res.status(200).json({ message: 'Quote created successfully', quote });
  } catch (err) {
    console.log("some error occured")
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

//this fucntion is to display all the quotes in our project.js and view-only-project.js
const list = async (req, res) => {
  try {
    const quotes = await Quote.find().populate('empId', 'name email');
    res.json(quotes);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

//updates the employees quote that lives in the database
const update = async (req, res) => {
  let quote = req.quote;
  quote = Object.assign(quote, req.body);
  quote.updated = Date.now();

  try {
    await quote.save();
    res.status(200).json(quote);
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

//removes the quote fron our database
const remove = async (req, res) => {
  try {
    let quote = req.quote;
    let deletedQuote = await quote.remove();
    res.status(200).json({ message: 'Quote deleted successfully', deletedQuote });
  } catch (err) {
    res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

//searches for a quote with a given id and adds on the employees id/email onto it to check it
//it is used to handle any route which will use /api/quotes/:quoteId' functionalites to remove/update quotes
const quoteByID = async (req, res, next, id) => {
  try {
    let quote = await Quote.findById(id).populate('empId', 'name email');
    if (!quote)
      return res.status(400).json({ error: 'Quote not found' });
    req.quote = quote;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Could not retrieve quote' });
  }
};

export default { create, list, quoteByID, read, update, remove };
