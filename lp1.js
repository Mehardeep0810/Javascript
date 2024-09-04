let studentData=[
  { name:"Mehar",age:19,gender:"Female",backend:35,cs:39,dwc:30},
  { name:"Jasnoor",age:19,gender:"male",backend:35,cs:39,dwc:30},
  { name:"Mehak",age:19,gender:"Female",backend:35,cs:39,dwc:30},
  { name:"Birinder",age:19,gender:"male",backend:35,cs:39,dwc:30},
  { name:"Mehtab",age:19,gender:"Female",backend:35,cs:39,dwc:30}
];
let updatedStudentData = studentData.map(student => {
  student.marks = ((student.backend + student.cs + student.dwc)/120)*100;
  return student;
});
function myfun(){
  let result = studentData.filter(student=>student.gender=="Female" && student.marks>"70");
    console.log(result);
}
myfun();
