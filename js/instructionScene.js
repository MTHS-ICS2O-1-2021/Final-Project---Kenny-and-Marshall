/* global Phaser */

// Copyright (c) 2022 Kenny Le and Marshall Demars All rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Instruction Scene

/**
 * This class is the Instruction Scene.
 */
class InstructionScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "instructionScene" })

    this.returnButton = null
    this.instructionText = null
    this.instructionTextStyle = {
      font: "65px Arial",
      fill: "#000000",
      align: "center",
    }
  }

  /**
   * This method is the init.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * This method is the preload.
   */
  preload() {
    console.log("Instruction Scene")
    this.load.image(
      "instructionSceneBackground",
      "./assets/instructionSceneImage.png"
    )
    this.load.image("returnButton", "assets/return.png")
    this.load.image("arrowKeys", "assets/arrowKeys.png")
    this.load.image("appleInstruction", "assets/apple.png")
    this.load.image("bananaInstruction", "assets/banana.png")
    this.load.image("pineappleInstruction", "assets/pineapple.png")
    this.load.image("spikeInstruction", "assets/spikeball.png")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.instructionSceneBackgroungImage = this.add.sprite(
      0,
      0,
      "instructionSceneBackground"
    )
    this.instructionSceneBackgroungImage.x = 1920 / 2
    this.instructionSceneBackgroungImage.y = 1080 / 2

    this.returnButton = this.add.sprite(
      600 / 4,
      300 / 4 + 100,
      "returnButton"
    )
    this.returnButton.setInteractive({ useHandCursor: true })
    this.returnButton.on("pointerdown", () => this.clickReturnButton())

    this.instructionText = this.add
          .text(
            200 / 2,
            700 / 2,
            "The objective of the game is to catch fruits while avoiding\nthe spikes. Apples and bananas are worth 1 point,\nthe pineapple is worth 3. If the basket\ntouches the spike the game will end, to\nmove the basket use the arrow keys!",
            this.instructionTextStyle
          )

    this.arrowKeysImage = this.add.sprite(0, 0, "arrowKeys")
    this.arrowKeysImage.x = 1920 / 2
    this.arrowKeysImage.y = 1800 / 2

    this.appleInstructionImage = this.add.sprite(0, 0, "appleInstruction").setScale(0.8)
    this.appleInstructionImage.x = 800 / 2
    this.appleInstructionImage.y = 1800 / 2

    this.bananaInstructionImage = this.add.sprite(0, 0, "bananaInstruction").setScale(0.5)
    this.bananaInstructionImage.x = 1350 / 2
    this.bananaInstructionImage.y = 1800 / 2

    this.pineappleInstructionImage = this.add.sprite(0, 0, "pineappleInstruction").setScale(0.5)
    this.pineappleInstructionImage.x = 2450 / 2
    this.pineappleInstructionImage.y = 1800 / 2

    this.spikeInstructionImage = this.add.sprite(0, 0, "spikeInstruction").setScale(0.5)
    this.spikeInstructionImage.x = 3100 / 2
    this.spikeInstructionImage.y = 1800 / 2
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // pass
  }

  /**
   * This method is the menuScene button.
   */
  clickReturnButton() {
    this.scene.start("menuScene")
    // pass
  }
}

export default InstructionScene
