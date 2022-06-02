//tutorial https://www.youtube.com/watch?v=rRgD1yVwIvE

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//basic for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//for each
// companies.forEach(function (company) {
//   console.log(company);
// });

//for each - can also get object attribute, like company name
// companies.forEach(function (company) {
//   console.log(company.name);
// });

//for loop used to filter ages 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//filter
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

//filter with arrow function
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

//filter retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category == 'Retail'
// );
// console.log(retailCompanies);

//filter all companies from the 80's
// const fromEighties = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(fromEighties);

//filter all companies that lasted at least 10 years
// const lastedTenPlus = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenPlus);

//map - create a new array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//map -  create new array of  name with start and end year
// const companyInfoMap = companies.map(
//   (company) => `Name: ${company.name} [${company.start} - ${company.end}]`
// );
// console.log(companyInfoMap);

//map - get age and square root it
// const ageSquare = ages.map((age) => Math.sqrt(age));
// console.log(ageSquare);

//map - use 2 maps, squareroot and then times
// const num = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(num);

//sort - take two params and then compare them. Sort by start date
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

//sort - written in a shorter form
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort - ages ascending
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

//sort - ages decending
// const sortedAges = ages.sort((a, b) => b - a);
// console.log(sortedAges);

//reduce
