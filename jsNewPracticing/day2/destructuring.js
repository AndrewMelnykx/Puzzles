// Question: Find the output of the below code (with reason)
let place = "US";
let department = {
  [getStudentPlace()]: "Ukraine",
  [place + "Department"]: "English",
  standard: 100,
};
function getStudentPlace() {
  return place;
}
let division = "standard";
let {
  [getStudentPlace()]: placeDetails,
  [place + "Department"]: departmentDetails,
  [division]: standard,
} = department;
console.log(placeDetails + "&" + departmentDetails + "&" + standard);
//Output:
// (a) US & English & 100
// (b) India & English & 100
// (a) undefined & undefined & undefined
// (d) Reference Error
