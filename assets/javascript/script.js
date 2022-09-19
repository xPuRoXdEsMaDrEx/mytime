// jQuery event method
$(document).ready(function() {
  //Title, current date and time
  var todaysDate = moment().format("MMMM Do YYYY");
  var date = document.getElementById("currentDay");
  date.innerHTML = todaysDate;
  var hourBlock = moment().format("HH");

  // Time Block, sets time blocks to different colors based on current time
  $(".time-block-color").each(function() {
    var time = $(this).attr("id").split("-")[1];
    
    if (hourBlock == time) {
      $(this).addClass("present");
    } else if (hourBlock < time) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (hourBlock > time) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  
  // Time Block, sets keys and values for local storage
  $(".saveBtn").click(function(event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  // Time Block, saved entries
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});