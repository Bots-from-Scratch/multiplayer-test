// Wiederholen-Block
Blockly.Blocks['controls_repeat_ext'] = {
    init: function() {
      this.jsonInit({
        "type": "controls_repeat_ext",
        "message0": "%{BKY_CONTROLS_REPEAT_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "TIMES",
            "check": "Number"
          }
        ],
        "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO}",
        "args1": [
          {
            "type": "input_statement",
            "name": "DO"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
      });
    }
  };
  
  // Schritt-Block
  Blockly.Blocks['move_forward'] = {
    init: function() {
      this.jsonInit({
        "type": "move_forward",
        "message0": "%{BKY_MOVE_FORWARD_TITLE}",
        "args0": [
          {
            "type": "field_number",
            "name": "STEPS",
            "value": 1,
            "min": 1,
            "precision": 1
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "motion_blocks",
        "tooltip": "%{BKY_MOVE_FORWARD_TOOLTIP}",
        "helpUrl": "%{BKY_MOVE_FORWARD_HELPURL}"
      });
    }
  };
  
  // Linksdrehen-Block
  Blockly.Blocks['turn_left'] = {
    init: function() {
      this.jsonInit({
        "type": "turn_left",
        "message0": "%{BKY_TURN_LEFT_TITLE}",
        "previousStatement": null,
        "nextStatement": null,
        "style": "motion_blocks",
        "tooltip": "%{BKY_TURN_LEFT_TOOLTIP}",
        "helpUrl": "%{BKY_TURN_LEFT_HELPURL}"
      });
    }
  };
  
  // Rechtsdrehen-Block
  Blockly.Blocks['turn_right'] = {
    init: function() {
      this.jsonInit({
        "type": "turn_right",
        "message0": "%{BKY_TURN_RIGHT_TITLE}",
        "previousStatement": null,
        "nextStatement": null,
        "style": "motion_blocks",
        "tooltip": "%{BKY_TURN_RIGHT_TOOLTIP}",
        "helpUrl": "%{BKY_TURN_RIGHT_HELPURL}"
      });
    }
  };
  

// Blockly.JavaScript['move_forward'] = function(block) {
//     var code = 'moveForward();\n';