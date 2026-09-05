function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}



// Write a function redundant that takes in a string str and returns a function that returns str.


function redundant(str) {
  return function () {
    return str;
  };
}


// Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

function getNotesDistribution(students) {
  const distribution = {};

  for (const note of students) {
    if (![1, 2, 3, 4, 5].includes(note)) continue;
    distribution[note] = (distribution[note] || 0) + 1;
  }

  return distribution;
}