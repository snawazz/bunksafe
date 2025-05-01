function calculateAttendance() {
  const total = parseInt(document.getElementById("total").value);
  const attended = parseInt(document.getElementById("attended").value);
  const result = document.getElementById("result");

  if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
    result.innerHTML = "Please enter valid numbers!";
    return;
  }

  const percentage = (attended / total) * 100;
  const requiredAttendance = 0.75 * total;
  const classesNeeded = Math.ceil(requiredAttendance - attended);
  const remaining = total - attended;

  let message = `Current Attendance: <strong>${percentage.toFixed(2)}%</strong><br>`;

  if (percentage >= 75) {
    const maxBunk = Math.floor((attended / 0.75) - total);
    message += maxBunk > 0
      ? `You can still bunk <strong>${maxBunk}</strong> classes 😁`
      : `You are exactly at 75%. Don't bunk any more classes!`;
  } else {
    if (classesNeeded <= remaining) {
      message += `You need to attend at least <strong>${classesNeeded}</strong> out of the remaining <strong>${remaining}</strong> classes to reach 75%.`;
    } else {
      message += `You cannot reach 75% even if you attend all remaining classes.<br> Try harder next time!`;
    }
  }

  

  result.innerHTML = message;
}