
/*
 * prefiks
 * https://github.com/Leny/prefiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var oAgents, oCaniuseData, _getBrowser;

oCaniuseData = require("caniuse-db/data.json");

oAgents = oCaniuseData.agents;

_getBrowser = function(sBrowserName) {
  switch (sBrowserName.toLowerCase()) {
    case "ie":
    case "internet explorer":
    case "internet-explorer":
    case "internet_explorer":
    case "internetexplorer":
      return oAgents["ie"];
    case "firefox":
      return oAgents["firefox"];
    case "chrome":
      return oAgents["chrome"];
    case "safari":
      return oAgents["safari"];
    case "opera":
      return oAgents["opera"];
    case "ios_saf":
      return oAgents["ios_saf"];
    case "op_mini":
      return oAgents["op_mini"];
    case "android":
      return oAgents["android"];
    case "op_mob":
      return oAgents["op_mob"];
    case "bb":
      return oAgents["bb"];
    case "and_chr":
      return oAgents["and_chr"];
    case "and_ff":
      return oAgents["and_ff"];
    case "ie_mob":
      return oAgents["ie_mob"];
    default:
      return null;
  }
};

module.exports = function(sFeature, sBrowser, sVersion) {
  var oBrowser, oFeature;
  if (sVersion == null) {
    sVersion = "*";
  }
  if (!(oBrowser = _getBrowser(sBrowser))) {
    throw new Error("Unknown browser '" + sBrowser + "' !");
  }
  if (!(oFeature = oCaniuseData.data[sFeature])) {
    throw new Error("Unknown feature '" + sFeature + "' !");
  }
};
