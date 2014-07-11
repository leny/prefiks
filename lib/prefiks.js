
/*
 * prefiks
 * https://github.com/Leny/prefiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var oAgents, oCaniuseData;

oCaniuseData = require("caniuse-db/data.json");

oAgents = oCaniuseData.agents;

module.exports = function(sFeature, sBrowser, sVersion) {
  var oBrowser, oFeature;
  if (sVersion == null) {
    sVersion = ">=0";
  }
  if (!(oBrowser = oAgents[sBrowser])) {
    throw new Error("Unknown browser '" + sBrowser + "' !");
  }
  if (!(oFeature = oCaniuseData.data[sFeature])) {
    throw new Error("Unknown feature '" + sFeature + "' !");
  }
};
