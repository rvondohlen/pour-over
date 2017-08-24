
// // scroll2 plugin from here: https://stackoverflow.com/a/4801719/5419709
// $.fn.goTo = function() {
//         $('html, body').animate({
//             scrollTop: $(this).offset().top + 'px'
//         }, 'swing', 1000);
//         return this; // for chaining...
//     }

$(function(){
  window.scrollTo(0, 0);
  $('.fade-in').velocity({ opacity:0 , translateY: 3 });
  
  $(".fade-in").each(function(index) {
    var timing = 350;
    $(this).delay(timing/3*index).velocity({ opacity:1 , translateY: 0 }, { duration: timing }, "ease-in-out");
  });


});


$(".step").click(function(){

  var hrefHash = "";
  var oldActiveHeight = $(".step.active").height();
  console.log("Old active Height : "+ oldActiveHeight);
  var titleHeight = 100;

  // HIDE OLD ACTIVE
  $(this).removeClass("done");
  if ( !$(this).hasClass("active") ){
    $(".step").each(function(){
      if ( $(this).hasClass("active") ){

         $(this).removeClass("active");
         $(this).addClass("done");
      }
    })
  }

  // SHOW NEW ACTIVE
  $(this).addClass("active");
  $(".active").nextAll().removeClass("done");

  // SCROLLING
  // hrefHash = $(this).attr("id");
  // console.log("clicked " + hrefHash);
  // window.location.href =  "#" + hrefHash;
  // //$(this).goTo();
  // $('html, body').animate({scrollTop: '+=85px'}, 1);
  // $('html, body').animate({scrollTop: '-=85px'}, 1000);

});

// TIMER 

var timerData = [];

function secondPassed(row) {
    var seconds = timerData[row].remaining;
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown' + row).innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(timerData[row].timerId);
        document.getElementById('countdown' + row).innerHTML = "<span class='done'>0:00</span>"; //&#x2717;
        document.getElementById('countdown' + row).style.color = '#dedede';
    } else {
        seconds--;
    }
    timerData[row].remaining = seconds;
}

function timer(row, min) {
    timerData[row] = {
        remaining: min * 60,
        timerId: setInterval(function () { secondPassed(row); }, 1000)
    };
}

// timer
// this could be optimized......

//bloom
$("#countdown1 span").one('click', function(){
  $(this).fadeOut();
  timer(1, 0.75);
  
});

//second
$("#countdown2 span").one('click', function(){
  $(this).fadeOut();
  timer(2, 0.75);
});

//third
$("#countdown3 span").one('click', function(){
  $(this).fadeOut();
  timer(3, 0.3);
});

//fourth
$("#countdown4 span").one('click', function(){
  $(this).fadeOut();
  timer(4, 0.3);
});

//$.getJSON("https://s3.amazonaws.com/rvondohlen-cdn/coffee_codepen/js/quotes.json", function (data) {
$.getJSON("quotes.json", function (data) {
    var randomQuote = data[Math.floor(Math.random() * data.length)];
    document.getElementById('quote').innerHTML = '"'+ randomQuote.quoteText +'"';
    document.getElementById('quote-attr').innerHTML = '— '+ randomQuote.quoteAuthor;

});


