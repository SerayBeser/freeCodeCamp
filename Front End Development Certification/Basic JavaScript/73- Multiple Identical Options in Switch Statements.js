
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "Low";
    break;

      case 4:
      case 5:
      case 6:
    result = "Mid";
        break;

      case 7:
      case 8:
      case 9:
    result = "High";  
    break;

}
  
  
  // Only change code above this line  
  return result;  
}

// Change this value to test
sequentialSizes(1);
sequentialSizes(2);

sequentialSizes(3);

sequentialSizes(4);



