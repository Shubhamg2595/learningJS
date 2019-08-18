// LEARNING ABOUT EVENTS AND EVENT SELECTORS

document.getElementById('heading').addEventListener('click',function(e) { 
    console.log('you have clicked the heading')
    let variable;
    variable = e.target;
    
    console.log('learning about events',variable);
    // e.target returns an element 
    
    console.log(variable.className);
    console.log(variable.classList);

    // playing with positiom
    variable = e.offsetX;
    variable = e.offsetY;
    // fetching values based on browser window
    variable = e.clientX;
    console.log(variable)
});

document.getElementById('heading').addEventListener('mouseover',function(e) { 
    console.log('you have clicked the heading')
    let variable;
    variable = e.target;
    variable = e.clientX
    console.log(variable);
});

// LEARNING MORE ABOUT EVENTS

// preventDefault with button of type submit
// here the default action when submit button is clicked that form will be submitted

let btn = document.getElementById('btn')
btn.addEventListener('click',func1
);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
btn.addEventListener('mouseenter',func4);
btn.addEventListener('mouseleave',func5);



function func1(e){
    console.log('Thanks',e);
    e.preventDefault();
}
function func2(e){
    console.log('Thanks for a double click',e);
    e.preventDefault();
}


function func3(e){
    console.log('Thanks its a mouseDown',e);
    e.preventDefault();
}


function func4(e){
    console.log('Thanks its a mouseenter',e);
    e.preventDefault();
}

function func5(e){
    console.log('Thanks its a mouseleave',e);
    e.preventDefault();
}

// mouseober


// amazing work with event selectors

document.querySelector('.container').addEventListener('mouseover',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},54)`;
    console.log('you triggered mouse over event');
})