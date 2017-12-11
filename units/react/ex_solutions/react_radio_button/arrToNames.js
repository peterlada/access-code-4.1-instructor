
const arrToNames = arr => {
  const allButLast = arr.slice(0, arr.length - 1).join(", ");
  const last = arr[arr.length - 1];
  return allButLast + " or " + last;
};


console.log(arrToNames(['dogs', 'cats', 'giraffes']))