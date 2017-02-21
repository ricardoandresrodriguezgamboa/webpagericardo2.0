$(document).ready(function(){
 

  var $circle1 = $('.circle-bar1');
  var $circle2 = $('.circle-bar2');
  var $circle3 = $('.circle-bar3');

  var bar1 = new ProgressBar.Circle('.circle-bar1', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: 'rgba(0, 228, 251, 0.5)', width: 1 },
  to: { color: 'rgba(0, 228, 251, 0.5)', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle1) {
    circle1.path.setAttribute('stroke', state.color);
    circle1.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle1.value() * 100);
    if (value === 0) {
      circle1.setText('');
    } else {
      circle1.setText(value + '%');
    }

  }
});
bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '2rem';

$circle1.waypoint(function(){
$circle1.addClass('js-circle-animate');
bar1.animate(0.7);  // Number from 0.0 to 1.0
},{ offset: '85%'});


  var bar2 = new ProgressBar.Circle('.circle-bar2', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: 'rgba(0, 228, 251, 0.5)', width: 1 },
  to: { color: 'rgba(0, 228, 251, 0.5)', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle2) {
    circle2.path.setAttribute('stroke', state.color);
    circle2.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle2.value() * 100);
    if (value === 0) {
      circle2.setText('');
    } else {
      circle2.setText(value + '%');
    }

  }
});
bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar2.text.style.fontSize = '2rem';

$circle2.waypoint(function(){
$circle2.addClass('js-circle-animate');
bar2.animate(0.65);  // Number from 0.0 to 1.0
},{ offset: '85%'});

 var bar3 = new ProgressBar.Circle('.circle-bar3', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: 'rgba(0, 228, 251, 0.5)', width: 1 },
  to: { color: 'rgba(0, 228, 251, 0.5)', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle3) {
    circle3.path.setAttribute('stroke', state.color);
    circle3.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle3.value() * 100);
    if (value === 0) {
      circle3.setText('');
    } else {
      circle3.setText(value + '%');
    }

  }
});
bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar3.text.style.fontSize = '2rem';

$circle3.waypoint(function(){
$circle3.addClass('js-circle-animate');
bar3.animate(0.7);  // Number from 0.0 to 1.0
},{ offset: '85%'});


});