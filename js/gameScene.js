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
   * This creates an apple.
   */
  createApple() {
    const appleXLocation = Math.floor(Math.random() * 1920) + 1
    let appleXVelocity = Math.floor(Math.random() * 50) + 1
    appleXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anApple = this.physics.add
      .sprite(appleXLocation, 0, "apple")
      .setScale(0.4)
    anApple.body.velocity.y = 300
    anApple.body.velocity.x = appleXVelocity
    this.appleGroup.add(anApple)
  }

  /**
   * This creates a banana.
   */
  createBanana() {
    const bananaXLocation = Math.floor(Math.random() * 1920) + 1
    let bananaXVelocity = Math.floor(Math.random() * 50) + 1
    bananaXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anBanana = this.physics.add
      .sprite(bananaXLocation, 0, "banana")
      .setScale(0.3)
    anBanana.body.velocity.y = 300
    anBanana.body.velocity.x = bananaXVelocity
    this.bananaGroup.add(anBanana)
  }

  /**
   * This creates a pineapple.
   */
  createPineapple() {
    const pineappleXLocation = Math.floor(Math.random() * 1920) + 1
    let pineappleXVelocity = Math.floor(Math.random() * 50) + 1
    pineappleXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anPineapple = this.physics.add
      .sprite(pineappleXLocation, 0, "pineapple")
      .setScale(0.3)
    anPineapple.body.velocity.y = 900
    anPineapple.body.velocity.x = pineappleXVelocity
    this.pineappleGroup.add(anPineapple)
  }

  /**
   * This creates a spike.
   */
  createSpike() {
    const spikeXLocation = Math.floor(Math.random() * 1920) + 1
    let spikeXVelocity = Math.floor(Math.random() * 50) + 1
    spikeXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anSpike = this.physics.add
      .sprite(spikeXLocation, 0, "spike")
      .setScale(0.3)
    anSpike.body.velocity.y = 350
    anSpike.body.velocity.x = spikeXVelocity
    this.spikeGroup.add(anSpike)
  }

  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = {
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
    console.log("Game Scene")

    // images
    this.load.image("skyBackground", "assets/sky-background.png")
    this.load.image("basket", "assets/basket.png")
    this.load.image("apple", "assets/apple.png")
    this.load.image("banana", "assets/banana.png")
    this.load.image("pineapple", "assets/pineapple.png")
    this.load.image("spike", "assets/spikeball.png")

    // sound
    this.load.audio("collect", "assets/popBasket.wav")
    this.load.audio("terminated", "assets/game-over.wav")
  }

  /**
   * This method is the create.
   */
  create(data) {
    this.background = this.add.image(0, 0, "skyBackground").setScale(3.7)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(
      10,
      10,
      "Score: " + this.score.toString(),
      this.scoreTextStyle
    )

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
    this.createSpike()
    this.createSpike()
    this.createSpike()

    // Collisions between basket and apple
    this.physics.add.collider(
      this.basket,
      this.appleGroup,
      function (basketCollide, appleCollide) {
        this.sound.play("collect")
        this.score = this.score + 1
        this.scoreText.setText("Score: " + this.score.toString())
        appleCollide.destroy()
        this.createApple()
        this.createApple()
        basketCollide = basketCollide.body.velocity.y = 0
      }.bind(this)
    )

    // Collisions between basket and banana
    this.physics.add.collider(
      this.basket,
      this.bananaGroup,
      function (basketCollide, bananaCollide) {
        this.sound.play("collect")
        this.score = this.score + 1
        this.scoreText.setText("Score: " + this.score.toString())
        bananaCollide.destroy()
        this.createBanana()
        this.createBanana()
        basketCollide = basketCollide.body.velocity.y = 0
      }.bind(this)
    )

    // Collisions between basket and pineapple
    this.physics.add.collider(
      this.basket,
      this.pineappleGroup,
      function (basketCollide, pineappleCollide) {
        this.sound.play("collect")
        this.score = this.score + 5
        this.scoreText.setText("Score: " + this.score.toString())
        pineappleCollide.destroy()
        this.createPineapple()
        basketCollide = basketCollide.body.velocity.y = 0
      }.bind(this)
    )

    // Collisions between basket and spike
    this.physics.add.collider(
      this.basket,
      this.spikeGroup,
      function (basketCollide, spikeCollide) {
        this.sound.play("terminated")
        this.score = 0
        this.scoreText.setText("Score: " + this.score.toString())
        spikeCollide.destroy()
        this.createSpike()
        basketCollide = basketCollide.body.velocity.y = 0
      }.bind(this)
    )

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

    this.appleGroup.children.each(function (item) {
      var randomNumber = 0
      if (item.y > 1080) {
        randomNumber = Math.floor(Math.random() * 2) + 1
        if (randomNumber == 2) {
          item.x = Math.floor(Math.random() * 1920) + 1
          item.y = -100
        } else {
          item.destroy()
        }
      }
    })

    this.bananaGroup.children.each(function (item) {
      var randomNumber = 0
      if (item.y > 1080) {
        randomNumber = Math.floor(Math.random() * 2) + 1
        if (randomNumber == 2) {
          item.x = Math.floor(Math.random() * 1920) + 1
          item.y = -100
        } else {
          item.destroy()
        }
      }
    })

    this.pineappleGroup.children.each(function (item) {
      if (item.y > 1080) {
        item.x = Math.floor(Math.random() * 1920) + 1
        item.y = -100
      }
    })

    this.spikeGroup.children.each(function (item) {
      if (item.y > 1080) {
        item.x = Math.floor(Math.random() * 1920) + 1
        item.y = -100
      }
    })
  }
}

export default GameScene
