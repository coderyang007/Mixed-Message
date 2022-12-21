// all the 12 animals:
const animalAndLuck = [
  {animal: "Rat", luckyColor: "blue, gold, and green", luckyNum: 3, newYearsLuck: "Thorny"},

  { animal: "Ox", luckyColor: "yellow, brown, white", luckyNum: 10, newYearsLuck: "Fortune"},

  {animal: "Tiger", luckyColor: "green", luckyNum: 9, newYearsLuck: "Balanced"},

  {animal: "Rabit", luckyColor: "blue and green", luckyNum: 6, newYearsLuck: "Surprising and Bewildering"},

  {animal: "Dragon", luckyColor: "white", luckyNum: 7, newYearsLuck: "Rewarding"},

  {animal: "Snake", luckyColor: "yellow", luckyNum: 3, newYearsLuck: "Smooth"},

  {animal: "Horse", luckyColor: "red", luckyNum: 5, newYearsLuck: "Tricky"},

  {animal: "Goat", luckyColor: "orange, red and purple", luckyNum: 8, newYearsLuck: "Unbalanced"},

  {animal: "Monkey", luckyColor: "white, gold, and silver", luckyNum: 9, newYearsLuck: "Mercurial"},

  {animal: "Rooster", luckyColor: "yellow, white, and silver", luckyNum: 5, newYearsLuck: "Challenging"},

  {animal: "Dog", luckyColor: "red, yellow, and brown", luckyNum: 2, newYearsLuck: "stable"},

  {animal: "Pig", luckyColor: "black and yellow", luckyNum: 3, newYearsLuck: "Delightful"}
]

// Grab values from the submitted form in the URL
const numbers = new URLSearchParams(window.location.search);
let myYear = numbers.get('year');
myYear = Number(myYear);

 const year1 = [1948, 1960, 1972, 1984,1996, 2008, 2020];
 const year2 = [1949, 1961, 1973, 1985, 1997, 2009, 2021];
 const year3 = [1950, 1962, 1974, 1986, 1998, 2010, 2022];
 const year4 = [1951, 1963, 1975, 1987, 1999, 2011];
 const year5 = [1952, 1964, 1976, 1988, 2000, 2012];
 const year6 = [1953, 1965, 1977, 1989, 2001, 2013];
 const year7 = [1954, 1966, 1978, 1990, 2002, 2014];
 const year8 = [1955, 1967, 1979, 1991, 2003, 2015];
 const year9 = [1956, 1968, 1980, 1992, 2004, 2016];
 const year10 = [1957, 1969, 1981, 1993, 2005, 2017];
 const year11 = [1958, 1970, 1982, 1994, 2006, 2018];
 const year12 = [1959, 1971, 1983, 1995, 2007, 2019];
 
 const years = [year1, year2, year3, year4, year5, year6, year7, year8, year9, year10, year11, year12]
//  make sure the years array index loop and match the same index as animalAndLuck:
let index = 0;
// let test = year1.includes(myYear);
//Find index of year in years array
for (let i = 0; i < years.length; i++)
{
  if (years[i].includes(myYear))
  {
    index = i;
    let luckyAnimal = document.getElementById("luckyanimal");
    luckyAnimal.innerHTML = `Your Animal: ${animalAndLuck[i].animal}`;

    let luckyColor = document.getElementById("luckycolor");
    luckyColor.innerHTML = `Your Lucky Color: ${animalAndLuck[i].luckyColor}`

    let luckyNum = document.getElementById("luckynum");
    luckyNum.innerHTML = `Your Lucky Number: ${animalAndLuck[i].luckyNum}`

     let luckThisYear = document.getElementById("luckthisyear");
     luckThisYear.innerHTML = `Your Luck in 2023: ${animalAndLuck[i].newYearsLuck}`
  }
}

// console.log(`You see ${colors[generateQ]}`);
// console.log(`You get ${luck[generateL]}`);
// console.log(`You should ${doThis[generateS]}`);