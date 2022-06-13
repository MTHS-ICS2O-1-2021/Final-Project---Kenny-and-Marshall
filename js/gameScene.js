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
  
  // create an apple
  createApple () {
    const appleXLocation = Math.floor(Math.random() * 1920) + 1
    let appleXVelocity = Math.floor(Math.random() * 50) + 1
    appleXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anApple = this.physics.add.sprite(appleXLocation, 100, 'apple').setScale(0.4)
    anApple.body.velocity.y = 200
    anApple.body.velocity.x = appleXVelocity
    this.appleGroup.add(anApple)  
  }

  // create a banana
  createBanana () {
    const bananaXLocation = Math.floor(Math.random() * 1920) + 1
    let bananaXVelocity = Math.floor(Math.random() * 50) + 1
    bananaXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anBanana = this.physics.add.sprite(bananaXLocation, 100, 'banana').setScale(0.3)
    anBanana.body.velocity.y = 200
    anBanana.body.velocity.x = bananaXVelocity
    this.bananaGroup.add(anBanana)  
  }

  // create a pineapple
  createPineapple () {
    const pineappleXLocation = Math.floor(Math.random() * 1920) + 1
    let pineappleXVelocity = Math.floor(Math.random() * 50) + 1
    pineappleXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anPineapple = this.physics.add.sprite(pineappleXLocation, 100, 'pineapple').setScale(0.3)
    anPineapple.body.velocity.y = 700
    anPineapple.body.velocity.x = pineappleXVelocity
    this.pineappleGroup.add(anPineapple)  
  }

  // create a spike
  createSpike () {
    const spikeXLocation = Math.floor(Math.random() * 1920) + 1
    let spikeXVelocity = Math.floor(Math.random() * 50) + 1
    spikeXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anSpike = this.physics.add.sprite(spikeXLocation, 100, 'spike').setScale(0.3)
    anSpike.body.velocity.y = 200
    anSpike.body.velocity.x = spikeXVelocity
    this.spikeGroup.add(anSpike)  
  }
  
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
    this.load.image("basket", "assets/basket.png")
    this.load.image("apple", "assets/apple.png")
    this.load.image("banana", "assets/banana.png")
    this.load.image("pineapple", "assets/pineapple.png")
    this.load.image("spike", "assets/spikeball.png")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.background = this.add.image(0, 0, "skyBackground").setScale(3.7)
    this.background.setOrigin(0, 0)

    this.basket = this.physics.add
      .sprite(1920 / 2, 1080 - 100, "basket")
      .setScale(0.5)

    // create a group for the apples
    this.appleGroup = this.add.group()
    this.createApple()

    // create a group for the bananas
    this.bananaGroup = this.add.group()
    this.createBanana()

    // create a group for the pineapples
    this.pineappleGroup = this.add.group()
    this.createPineapple()

    // create a group for the spikes
    this.spikeGroup = this.add.group()
    this.createSpike()

    // Collisions between basket and apple
    this.physics.add.collider(this.basket, this.appleGroup, function (basketCollide, appleCollide) {
      appleCollide.destroy()
      this.createApple()
    }.bind(this))

    // Collisions between basket and banana
    this.physics.add.collider(this.basket, this.bananaGroup, function (basketCollide, bananaCollide) {
      bananaCollide.destroy()
      this.createBanana()
    }.bind(this))

    // Collisions between basket and pineapple
    this.physics.add.collider(this.basket, this.pineappleGroup, function (basketCollide, pineappleCollide) {
      pineappleCollide.destroy()
      this.createPineapple()
    }.bind(this))

    // Collisions between basket and spike
    this.physics.add.collider(this.basket, this.spikeGroup, function (basketCollide, spikeCollide) {
      spikeCollide.destroy()
      this.createSpike()
    }.bind(this))
    
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // 60 times a second

    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")

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
