var size = new Pos(20, 20);

function Pos (x, y) {
  this.x = x;
  this.y = y;
  this.equals = function(p) {
    return this.x === p.x && this.y === p.y;
  }
  this.add = function(p) {
    return new Pos(
      (this.x + p.x + size.x) % size.x,
      (this.y + p.y + size.y) % size.y)
  } 
}

randomPos = function() { 
  return new Pos(
    Math.floor(Math.random() * size.x),
    Math.floor(Math.random() * size.y))
}

function rotateRight(pos) {
  return new Pos(-pos.y, pos.x)
}

function rotateLeft(pos) {
  return new Pos(pos.y, -pos.x)
}
