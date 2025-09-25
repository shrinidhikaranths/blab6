const studentForm=document.getElementById('studentForm');
const studentList=document.getElementById('studentList');
const errorDiv=document.getElementById('error');
const students = [];
studentForm.addEventListener('submit',function(event){
event.preventDefault();
const studentId=document.getElementById('studentId').value;
const studentName=document.getElementById('studentName').value;
const studentAge=document.getElementById('studentAge').value;
try{
    addStudent(studentId,studentName,studentAge);
    displayStudents();
    errorDiv.textcontent='';
}
catch(error){
    errorDiv.textContent=error.message;
}
studentForm.reset();
});

function addStudent(id,name,age){
    if(!id||!name || !age){
        throw new Error('All field are required');
    }
    if(isNaN(age)||age<=0){
        throw new Error('age must be positive');
    }
    const studentExists=students.some(student=>student.id===id);
    if(studentExists){
        throw new Error('student id already exists');
    }
    const student={
        id,
        name,
        age:parseInt(age,10)
    };

    students.push(student);
}
function displayStudents(){
    studentList.innerHTML='';
    students.forEach(student=>{
        const li=document.createElement('li');
        li.textContent=`ID :${student.id},Name:${student.name},Age:${student.age}`;
        studentList.appendChild(li);
    });
    }
