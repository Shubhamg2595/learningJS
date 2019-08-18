// SMART WEBPAGE CRAWLER

let str = "python"
let links = document.links
console.log(links);

let href;

Array.from(links).forEach(element => {
    href = element.href;
    if(href.toLowerCase().includes(str))
    {
        console.log(href);
    }

})