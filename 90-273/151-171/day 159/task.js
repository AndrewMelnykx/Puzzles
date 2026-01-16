let bills = [5, 5, 5, 10, 20];

var lemonadeChange = function (bills) {
  if (bills[0] > 5) {
    return false;
  }
  let fivesArr = [];
  let tenthArr = [];
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      fivesArr.push(bill);
    } else if (bill === 10) {
      const five = fivesArr.pop();
      if (five === undefined) {
        return false;
      }
      tenthArr.push(10);
    } else if (bill === 20) {
      if (tenthArr.length > 0 && fivesArr.length > 0) {
        const ten = tenthArr.pop();
        const five = fivesArr.pop();
        if (ten === undefined || five === undefined) {
          return false;
        } else if (fivesArr.length >= 3) {
          fivesArr.pop();
          fivesArr.pop();
          fivesArr.pop();
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

let result = lemonadeChange(bills);
console.log(result);
