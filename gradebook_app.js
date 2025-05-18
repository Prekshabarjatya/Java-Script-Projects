function getAverage(scores){
  const total = scores.reduce((accumulator, score) => {
    return accumulator+score;
    }, 0);
    const avg = total/scores.length;
    return avg;
}

function getGrade(score){
  if(score == 100) return "A+";
  if(score >= 90 && score <=99) return "A";
  if(score >=80 && score <=89 ) return "B";
  if(score >=70 && score <=79 ) return "C";
  if(score >=60 && score <=69 ) return "D";
  if(score >=0 && score <=59 ) return "F";
}

function hasPassingGrade(score){
  if(getGrade(score)!="F") return true;
  else return false;
}

function studentMsg(scores,score){
  if(hasPassingGrade(score)){
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`}
    else
    {
      return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`
    }
}
