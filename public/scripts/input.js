class Input {
  constructor() {
    this.keys = new Set();
    this.mousePos = { x: 0, y: 0 };
    this.mousePressed = false;
  }

  keyPressed(key) {
    this.keys.add(key);
  }

  keyReleased(key) {
    this.keys.delete(key);
  }

  mouseMoved(x, y) {
    this.mousePos.x = x;
    this.mousePos.y = y;
  }

  mousePressedEvent() {
    this.mousePressed = true;
  }

  mouseReleasedEvent() {
    this.mousePressed = false;
  }

  isKeyDown(key) {
    return this.keys.has(key);
  }

  isMouseDown() {
    return this.mousePressed;
  }

  getMousePos() {
    return this.mousePos;
  }
}

const input = new Input();

function keyPressed() {
  input.keyPressed(key);
}

function keyReleased() {
  input.keyReleased(key);
}

function mouseMoved() {
  input.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  input.mousePressedEvent();
}

function mouseReleased() {
  input.mouseReleasedEvent();
}

export default input;
