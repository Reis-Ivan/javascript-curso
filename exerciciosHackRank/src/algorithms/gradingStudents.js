function gradingStudents(grades) {
  function nextMultipleOfFive(num) {
    while (num) {
      if (num % 5 === 0) return num;
      num += 1;
    }

    return num;
  }

  const newGrades = grades.map((grade) => {
    const roundGrade = nextMultipleOfFive(grade);

    if (grade < 38) return grade;

    return roundGrade - grade >= 3 ? grade : roundGrade;
  });

  return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
