// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

// function description

function update() {
  // input
  const age = parseInt(document.getElementById("age").value)
  const day = parseInt(document.getElementById("day").value)

  // output
  if (day == 3 || day == 5 || (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML = "You get in for free"
  } else {
    document.getElementById("answer").innerHTML = "You must pay admission"
  }
}
