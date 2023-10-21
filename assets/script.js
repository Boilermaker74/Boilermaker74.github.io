// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // TODO: Add code to display the current date in the header of the page.

  // Sets dateEL as the current date using dayjs
  // Sets hourNumber as the current hour using dayjs

  var dateEL = dayjs().format("dddd MM/DD/YYYY");
  var hourNumber = dayjs().hour();

  $("#currentDay").text(dateEL);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  //  HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // Hides the confirm message after 5 seconds

  function myGreeting() {
    document.getElementById("confirm").style.display = "none";
  }

  $(parent).on("click", function (saveBTN) {
    if (
      saveBTN.target.nodeName === "I" ||
      saveBTN.target.nodeName === "BUTTON"
    ) {
      timeMessage = $(saveBTN.target).closest("div").attr("id");
      appT = document.getElementById(timeMessage + "1").value;
      localStorage.setItem(timeMessage + "1", appT);

      // display confirm message

      (document.getElementById("confirm").style.display = "inline"),
        (myTimeout = setTimeout(myGreeting, 3000));
    } else {
      return;
    }
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // This code compares each time block against the current hour using dayjs

  function updateTime() {
    for (let i = 9; i < 18; i++) {
      if (i < hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block past");
        console.log("past " + i);
        console.log(hourNumber);
      } else if (i > hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block future");
        console.log("past " + i);
        console.log(hourNumber);
      } else if (i === hourNumber) {
        $("#hour-" + i).removeClass();
        $("#hour-" + i).addClass("row time-block present");
        console.log("present " + i);
        console.log(hourNumber);
      }
    }
  }

  updateTime();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function getStorage() {
    for (i = 91; i < 181; i += 10) {
      document.getElementById("hour-" + i).value = localStorage.getItem(
        "hour-" + i
      );
    }
  }

  getStorage();
});
