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
    this.load.image("skyBackground", "assets/sky-background.png")
    this.load.image('basket', 'assets/basket.png')
    this.load.image('apple', 'assets/apple.png')
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.background = this.add.image(0, 0, "skyBackground").setScale(3.7)
    this.background.setOrigin(0, 0)

    this.basket = this.physics.add.sprite(1920 / 2, 1080 - 100, 'basket').setScale(0.5)
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // 60 times a second
    
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')

    if (keyLeftObj.isDown === true) {
      this.basket.x -= 25
      if (this.basket.x < 0) {
        this.basket.x = 1920
      }
    }

    if (keyRightObj.isDown === true) {
      this.basket.x += 25
      if (this.basket.x > 1920) {
        this.basket.x = 0
      }
    }
    // pass
  }
}

export default GameScene
