/* global Phaser */

//Copyright (c) 2022 Kenny and Marshall all rights reserved
//
// Created by: Kenny Le and Marshall Demars
// Created on: June 2022
// This is the Phaser3 configuration file

/** Game scene.*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.Fit,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
