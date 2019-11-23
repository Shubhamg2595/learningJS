// callback functions can be synchronous and asynchronous

/**
 *
 * example:
 * forEach() function is sync.
while setTimeout() function is async.async and both are example of callback function.

 */


const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

console.log('student details',students);


// function enrollStudent(student)
// {
//     setTimeout(function(){
//         students.push(student);
//         console.log('new student has enrolled');
//     }  ,3000);
// }

// function getAllStudents(){
//     setTimeout(function(){
//         let str='';
//         students.forEach(student => {
//             str+=`<li>${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML=str;
//         console.log('all info fetched');
//     },1000);
// }


// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent);
// getAllStudents();


// now above piece of code wll only print student info for 'harry' and 'rohan' and not for sunny as getStudents will be executed first ,while enrollStudent will take 3 more seconds to execute

// however we want the getAllstudents() func to be executed once a new student has enrolled successfully.
// for such operations we can use callBack


function enrollStudent(student,callback)
{
    console.time('time taken::')
    setTimeout(function(){
        students.push(student);
        console.log('new student has enrolled');
        
    callback();
    }  ,3000);

}

function getAllStudents(){
    setTimeout(function(){
        let str='';
        students.forEach(student => {
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log('all info fetched');
        console.timeEnd('time taken::')
    },1000);
}


let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent,getAllStudents);

