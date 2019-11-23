// playing with local storage


localStorage.setItem('name','shubham gupta')
localStorage.setItem('name2','shubham gupta2')

console.log(localStorage.getItem('name'));

// fetch data from localStorage directly from now on

// clearing localStorage
// localStorage.clear();

// removing an item from localStorage
// localStorage.removeItem('name')

// how to handle arrays in localStorage

let randomArray = ['asdn','asjd','qweqwe']

localStorage.setItem('randomStorage',JSON.stringify(randomArray))

// accessing store array type as an actual array

console.log(JSON.parse(localStorage.randomArray))



// sessionStorage works similar to localstorage,only difference is that sessionStorage is cleared as soon as you close the browser