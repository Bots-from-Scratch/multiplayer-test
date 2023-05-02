var game;
var blocklyDiv;
var workspace;
var player;

function preload() {
  this.load.image("player", "assets/player.png");
}

function create() {
  player = this.physics.add.sprite(400, 300, "player");
  player.setCollideWorldBounds(true);

  blocklyDiv = document.getElementById("blocklyDiv");
  workspace = Blockly.inject(blocklyDiv, {
    toolbox: document.getElementById("toolbox"),
  });

  Blockly.Xml.domToWorkspace(document.getElementById("startBlocks"), workspace);

  var runButton = document.getElementById("runButton");
  runButton.addEventListener("click", function () {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
  });

  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    player.setPosition(400, 300);
    player.setRotation(0);
  });
}

function update() {
  var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  var rightKey = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.RIGHT
  );
  var upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

  if (leftKey.isDown) {
    player.setAngle(player.angle - 5);
  } else if (rightKey.isDown) {
    player.setAngle(player.angle + 5);
  }

  if (upKey.isDown) {
    var radians = Phaser.Math.DegToRad(player.angle - 90);
    var dx = Math.cos(radians) * 5;
    var dy = Math.sin(radians) * 5;
    player.x += dx;
    player.y += dy;
  }
}

game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "gameDiv",
  physics: {
    default: "arcade",
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
});

// Initialize the interpreter
var interpreter = new AcornInterpreter(acorn);
interpreter.appendCode("var x = 0;");

// Get the run button and add a click event listener to execute the Blockly code
var runButton = document.getElementById("runButton");
runButton.addEventListener("click", function () {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  interpreter.appendCode(code);
  interpreter.run();
});

// Get the reset button and add a click event listener to reset the interpreter and workspace
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  interpreter = new AcornInterpreter(acorn);
  workspace.clear();
});

// Initialize the socket
var socket = io();

// When the socket connects, log a message to the console
socket.on('connect', function() {
  console.log('Connected to server');
});

// When the socket receives a message, log the message to the console
socket.on('message', function(data) {
  console.log('Received message:', data);
});

