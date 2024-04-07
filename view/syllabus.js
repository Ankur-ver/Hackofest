document.addEventListener("DOMContentLoaded", function() {
    const classSelector = document.getElementById("class-selector");
    const syllabusDisplay = document.getElementById("syllabus-display");
  
    classSelector.addEventListener("change", function() {
      const selectedClass = parseInt(classSelector.value);
      syllabusDisplay.innerHTML = "";
  
      if (selectedClass >= 0) {
        const syllabus = generateSyllabus(selectedClass);
        syllabusDisplay.textContent = syllabus;
      }
    });
 
    function generateSyllabus(selectedClass) {
     
      switch(selectedClass) {
        case 0:
            return "Select your Class to see your Syllabus";
        case 1:
          return "Class 1 Syllabus : Basic Mathematics, English Grammar, Science ";
        case 2:
          return "Class 2 Syllabus : Addition and Subtraction, English Vocabulary, Science";
        case 3:
          return "Class 3 Syllabus : Multiplication and Division, Basic Grammar, Introduction to Environmental Science";
        case 4:
          return "Class 4 Syllabus : Fractions and Decimals, Advanced Grammar, Environmental Science (Continued)";
        case 5:
          return "Class 5 Syllabus : Geometry, Essay Writing, Introduction to Social Studies";
        case 6:
          return "Class 6 Syllabus : Mathematics(6), Science, History, Geography,Hindi,English,France";
        case 7:
          return "Class 7 Syllabus : Mathematics(7),Hindi,English, History, Geography";
        case 8:
          return "Class 8 Syllabus : Mathematics(8),Hindi,English, History, Geography";
        case 9:
          return "Class 9 Syllabus : Coordinate Geometry, Surface Area and Volumes , History, Geography, English, Hindi";
        case 10:
          return "Class 10 Syllabus : Linear Algebra,Coordinate Geometry, Science, Hindi, Information Technology, English";
        case 11:
          return "Class 11 Syllabus : Mathematics(Algebra,Complex,Coordinates-Geometry,Probability,P & C),Chemistry,English  Physics, Python or Hindi";
        case 12:
          return "Class 12 Syllabus : Mathematics(integration,differential,Function),Chemistry,English  Physics, Python or Hindi";
        default:
            return "Select your Class to see your Syllabus";
        
      }
    }
  });