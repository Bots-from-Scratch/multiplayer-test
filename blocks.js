Blockly.Blocks['move_forward'] = {
    init: function() {
      this.jsonInit({
        "message0": "Move forward %1 steps",
        "args0": [
          {
            "type": "input_value",
            "name": "STEPS",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Moves the player forward by the specified number of steps",
        "helpUrl": ""
      });
    }
  };
  
  Blockly.Blocks['turn_left'] = {
    init: function() {
      this.jsonInit({
        "message0": "Turn left",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Turns the player left by 90 degrees",
        "helpUrl": ""
      });
    }
  };
  
  Blockly.Blocks['turn_right'] = {
    init: function() {
      this.jsonInit({
        "message0": "Turn right",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Turns the player right by 90 degrees",
        "helpUrl": ""
      });
    }
  };
  