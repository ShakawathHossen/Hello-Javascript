function totalMarks(assignment1,assignment2,assignment3) {
    var totalAssignmentMark = assignment1 + assignment2 + assignment3;
    var assignmentAvarage = totalAssignmentMark / 3;
    return assignmentAvarage;
    
} 
var mark1 = 44;
var mark2 = 44;
var mark3 = 33;

var marks = totalMarks(mark1,mark2,mark3);
console.log('your avarage mark on assignment is',marks.toFixed(3));

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
