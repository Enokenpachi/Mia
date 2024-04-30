// Define the birthday data for each person
var birthdays = [
  { name: "Mark", month: 8, day: 13 },
  { name: "Lee", month: 7, day: 26 },
  { name: "Kenn", month: 9, day: 26 },
  { name: "Kristell", month: 10, day: 12 },
  { name: "Jessa", month: 7, day: 22 },
  { name: "Ej", month: 6, day: 11 }
];

// Function to generate birthday announcements
function generateBirthdayAnnouncements() {
  var today = new Date();
  var announcements = "";

  // Loop through each person's birthday
  for (var i = 0; i < birthdays.length; i++) {
    var person = birthdays[i];

    // Check if today is the person's birthday
    if (today.getMonth() + 1 === person.month && today.getDate() === person.day) {
      // Generate birthday announcement with added greeting
      announcements += "Happy Birthday, " + person.name + "! Be sure to wear a seat belt because your life is about to gear up and blast off into space. The warmest birthday greetings!<br>";
    }
  }

  // Return the birthday announcements
  return announcements;
}

// Function to display birthday announcements
function displayBirthdayAnnouncements() {
  var announcementsDiv = document.getElementById('announcements');
  announcementsDiv.innerHTML = generateBirthdayAnnouncements();
}

// Call the displayBirthdayAnnouncements function when the page loads
window.onload = displayBirthdayAnnouncements;
