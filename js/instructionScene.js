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
      1920 / 4,
      1080 / 4 + 100,
      "returnButton"
    )
    this.returnButton.setInteractive({ useHandCursor: true })
    this.returnButton.on("pointerdown", () => this.clickReturnButton())
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
