// write a js code to fetch out all the links from a website and then filter out the particular links based on user Input

Array.from(document.links).filter(link => link.href.includes('code'))