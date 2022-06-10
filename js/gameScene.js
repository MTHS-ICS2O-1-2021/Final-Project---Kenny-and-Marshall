/* global Phaser */

// Copyright (c) 2022 Kenny Le and Marshall Demars All rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Game Scene

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
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
    console.log("Game Scene")

    // images
    this.load.image('skyBackground', 'assets/sky-background.png')
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.background = this.add.image(0, 0, 'skyBackground').setScale(3.5)
    this.background.setOrigin(0, 0)
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // pass
  }
}

export default GameScene
