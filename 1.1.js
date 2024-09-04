//show data whose salary is more than 20000 and state is Punjab
const EmployeeData =[
  {"name":"Mehar","Salary":30000,"State":"Punjab"},
  {"name":"Jasnoor","Salary":40000,"State":"Punjab"},
  {"name":"Birinder","Salary":17000,"State":"Punjab"},
  {"name":"Upneet","Salary":18000,"State":"Chandigarh"},
];
function fun(){
  let newarr=EmployeeData.filter(Employee=>Employee.Salary>20000&&Employee.State=="Punjab");
  console.log(newarr);
}
fun()
