
  function getInterest(total, rate, year) {
    var interest = (total * rate * year) / 100;
    console.log(interest);
    return interest;
  }

  var output = getInterest(600, 9.5, 2);
