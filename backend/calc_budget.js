export function calculateBudget(workHours, workerType, humanResources) {
    let rate;
    //set the pay rate for each of the classes of workertype
    //then multiply the hours by the payrate

    //simple switch statment, works just like an if stament with less code
    switch (workerType) {
      case 'junior':
        rate = 10;
        break;
      case 'mid-senior':
        rate = 20;
        break;
      case 'senior':
        rate = 30;
        break;
      default:
        rate = 0;
    }

    //fudge factor application
    const randomMultiplier = 0.5 + Math.random();
    rate = rate * randomMultiplier;

    //ensures that we get our values as numbers
    const budget = (parseInt(workHours) * rate) + parseInt(humanResources);
    return parseFloat(budget.toFixed(2));
  }
  
  
