const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  // Fügen Sie hier alle Ressourcen hinzu, die das Spiel benötigt
}

function create() {
  // Erstellen Sie hier die Spielszene
  const blocklyDiv = document.createElement("div");
  blocklyDiv.id = "blockly-div";
  document.body.appendChild(blocklyDiv);

  const workspace = Blockly.inject("blockly-div", {
    toolbox: document.getElementById("toolbox"),
  });

  // Interpreter initialisieren
  const interpreter = new Interpreter("", initApi);

  // Listener für 'Run'-Button hinzufügen
  const runButton = document.getElementById("run-button");
  runButton.addEventListener("click", function () {
    runCode(workspace, interpreter);
  });

  // Funktion, um den Blockly-Code auszuführen
  function runCode(workspace, interpreter) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    interpreter = new Interpreter(code, initApi);
    while (interpreter.step()) {}
  }

  // API für den Interpreter definieren
  const initApi = function (interpreter, scope) {
    // Funktionen für die Blöcke definieren
    interpreter.setProperty(
      scope,
      "moveForward",
      interpreter.createNativeFunction(function () {
        // Code zum Vorwärtsbewegen des Spielcharakters hier einfügen
      })
    );
    interpreter.setProperty(
      scope,
      "turnLeft",
      interpreter.createNativeFunction(function () {
        // Code zum Linksdrehen des Spielcharakters hier einfügen
      })
    );
    interpreter.setProperty(
      scope,
      "turnRight",
      interpreter.createNativeFunction(function () {
        // Code zum Rechtsdrehen des Spielcharakters hier einfügen
      })
    );
  };
}

function update() {
  // Aktualisieren Sie hier die Spielszene
  interpreter.run();
}
