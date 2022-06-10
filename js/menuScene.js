/* global Phaser */

// Copyright (c) 2022 Kenny Le and Marshall Demars All rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Menu Scene

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
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
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "assets/fruits_screen_image2.jpg")
    this.load.image("startButton", "assets/start.png")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // pass
  }

  /**
   * This method is the button.
   */
  clickButton() {
    this.scene.start("gameScene")
    // pass
  }
}

export default MenuScene
