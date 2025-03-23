function getGrade(score){
    if(score >= 90){
        return "Grade A";
    }
    if( score >= 80 && score <= 90){
        return "Grade B";
    }
    else{
        return "Grade C";
    }
}

console.log(getGrade(85));