// get number from searchform and pass in it in paginate function 
const paginate = (numberOfDays) => {
  const arrayOfDays = [...Array(numberOfDays)]
  const dayPerPage = 8;
  const numberOfPages = Math.ceil(arrayOfDays.length / dayPerPage);
  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
   const start = index * dayPerPage;
    return arrayOfDays.slice(start, start + dayPerPage);
  });
  return newArray;
}

export default paginate