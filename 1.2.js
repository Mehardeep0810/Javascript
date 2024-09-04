//increament salary by 10%
let employees =[
  {"name":"Mehar","Salary":30000,"State":"Punjab"},
  {"name":"Jasnoor","Salary":40000,"State":"Punjab"},
  {"name":"Birinder","Salary":17000,"State":"Punjab"},
  {"name":"Upneet","Salary":18000,"State":"Chandigarh"},
];

employees=employees.map(employee=>{
  return{
    salary:employee.Salary*1.1
  };
})
let highSalaryEmployees=employees.filter(employee=>employee.salary>=25000);
console.log(highSalaryEmployees);