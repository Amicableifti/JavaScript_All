const college = {
    name : 'AIUB',
    class : ['11','12','14'],
    unique: {
        color: 'blue',
        size: 'xl',
        blue:{
            color: 'blue01'
        }
    }
}

console.log(college.unique.blue.color)
console.log(college)
delete college.class;
console.log(college)