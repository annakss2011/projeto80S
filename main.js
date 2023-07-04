var nameOfStudentArray=[];
var displayStudentArray=[];

function submit(){
   for (var contador=1; contador <= 7; contador++) {
      var nameOfTheStudent=document.getElementById("nameOfTheStudent"+contador).value;
      console.log(nameOfTheStudent);
      nameOfStudentArray.push(nameOfTheStudent);
       
   } 
}