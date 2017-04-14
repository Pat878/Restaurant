$(document).ready(function() {

$(".image").append('<img src="http://cookdiary.net/wp-content/uploads/images/Pizza-Pie_9782.jpg">')

  $("#1").click(function callback() {
    $("#content").empty()

    $("#content").append("I Make Great Pie.")

  })

  $("#2").click(function() {
    $("#content").empty()

    $("#content").append("You'll find Yummy Pies.")

  })

  $("#3").click(function() {
    $("#content").empty()

    $("#content").append("Call Papa John's")

  })

});
