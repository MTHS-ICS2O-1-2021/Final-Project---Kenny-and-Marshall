/* global Phaser */

// Copyright (c) 2022 Kenny Le and Marshall Demars All rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Title Scene

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "150px Times",
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
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/fruit_screen_img.jpg")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "titleSceneBackground"
    )
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5)
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
    // pass
  }
}

export default TitleScene
