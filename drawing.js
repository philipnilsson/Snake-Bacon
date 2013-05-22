function drawGame(size) {
  var game = $('#game');
  for (var i = 0; i < size.x; i++) {
    var row = $('<div class="row" />')
    for (var j = 0; j < size.y; j++) {
      row.append('<span class="cell" />')
    }
    game.append(row)
  }
}

function fillCells(klass) {
  var game = $('#game')
  return function(ps) { 
    game.find('.cell').removeClass(klass)
    for (var i in ps) {
      game.find('.row:eq('+ps[i].y+')')
          .find('.cell:eq('+ps[i].x+')')
          .addClass(klass)
    }
  }
}

var drawApple = fillCells('apple')
var drawSnake = fillCells('snake')

function logRestart() {
  console.log('press')
  $('#log').html("Press 'r' to restart")
}

function logClear() {
  $('#log').html('Press left/right to steer.')
}

$score = $('#score')
function setScore(score) {
  $score.html(score)
}
