/* global Phaser */

// Copyright (c) 2022 Kenny Le and Marshall Demars All rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "splashScene" })
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
    console.log("Splash Scene")
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.splashSceneBackgroungImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroungImage.x = 1920 / 2
    this.splashSceneBackgroungImage.y = 1080 / 2
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
    // pass
  }
}

export default SplashScene
