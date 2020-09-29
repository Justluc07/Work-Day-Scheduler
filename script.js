
$("#currentDay").text(moment().format("LL,HHm"));

function currentTime (){
  var hour = moment().hour();

// time and color change
  $("time-block"). each(function (){
   var timeNow= parseInt($(this).attr("id").split("")[1])
   $(".textarea").each(function(){
  if (timeNow < currentHour){    
      $(this).addClass("past")
      $(this).removeClass("present")
      $(this).removeClass("future")
  }else if(currentHour > timenow){
    $(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
  } else {
      $(this).removeClass("past")
      $(this).addClass("present")
      $(this).removeClass("future")
  } 
  })},
  (currentTime
   

//onclick to save  to local storage


$(".saveBtn").on("click", function(){
  var time= $(this).parent().attr("id");
  var text= $(this).siblings("textarea").val();
 

   localStorage.setItem(time,text);
}),

$("#hour-9.textarea").val(localStorage.getItem("hour-9")),
$("#hour-10.textarea").val(localStorage.getItem("hour-10")),
$("#hour-11.textarea").val(localStorage.getItem("hour-11")),
$("#hour-12.textarea").val(localStorage.getItem("hour-12")),
$("#hour-13.textarea").val(localStorage.getItem("hour-13")),
$("#hour-14.textarea").val(localStorage.getItem("hour-14")),
$("#hour-15.textarea").val(localStorage.getItem("hour-15")),
$("#hour-16 .textarea").val(localStorage.getItem("hour-16")),
$("#hour-17.textarea").val(localStorage.getItem("hour-17")),

  )}

