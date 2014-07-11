
/*
 * prefiks
 * https://github.com/Leny/prefiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var lodash, oAgents, oCaniuseData, semver, _getBrowser;

oCaniuseData = require("caniuse-db/data.json");

semver = require("semver");

lodash = require("lodash");

oAgents = oCaniuseData.agents;

_getBrowser = function(sBrowserName) {
  var oAgent, sAgent;
  sAgent = (function() {
    switch (sBrowserName.toLowerCase()) {
      case "ie":
      case "internet explorer":
      case "internet-explorer":
      case "internet_explorer":
      case "internetexplorer":
        return "ie";
      case "firefox":
      case "ff":
        return "firefox";
      case "chrome":
        return "chrome";
      case "safari":
        return "safari";
      case "opera":
        return "opera";
      case "ios_saf":
      case "ios":
        return "ios_saf";
      case "op_mini":
        return "op_mini";
      case "android":
        return "android";
      case "op_mob":
        return "op_mob";
      case "bb":
        return "bb";
      case "and_chr":
        return "and_chr";
      case "and_ff":
        return "and_ff";
      case "ie_mob":
        return "ie_mob";
      default:
        return null;
    }
  })();
  if (sAgent) {
    oAgent = oAgents[sAgent];
    oAgent["name"] = sAgent;
    return oAgent;
  }
};

module.exports = function(sFeature, sBrowser, mGivenVersion) {
  var aPrefixes, bUseDefaulfPrefix, oBrowser, oBrowserFeatureImplementations, oFeature, sExceptionPrefix, sImplementation, sPrefixExceptionVersion, sVersion, _ref;
  if (mGivenVersion == null) {
    mGivenVersion = "*";
  }
  if (!(oBrowser = _getBrowser(sBrowser))) {
    throw new Error("Unknown browser '" + sBrowser + "' !");
  }
  if (!(oFeature = oCaniuseData.data[sFeature])) {
    throw new Error("Unknown feature '" + sFeature + "' !");
  }
  aPrefixes = [];
  if (!(oBrowserFeatureImplementations = oFeature.stats[oBrowser.name])) {
    return [];
  }
  for (sVersion in oBrowserFeatureImplementations) {
    sImplementation = oBrowserFeatureImplementations[sVersion];
    if (semver.satisfies(sVersion, mGivenVersion)) {
      if (sImplementation && sImplementation.indexOf("x") !== -1) {
        bUseDefaulfPrefix = true;
        if (oBrowser.prefix_exceptions) {
          _ref = oBrowser.prefix_exceptions;
          for (sPrefixExceptionVersion in _ref) {
            sExceptionPrefix = _ref[sPrefixExceptionVersion];
            if (!(semver.satisfies(sPrefixExceptionVersion, mGivenVersion))) {
              continue;
            }
            bUseDefaulfPrefix = false;
            aPrefixes.push(sExceptionPrefix);
          }
        }
        if (bUseDefaulfPrefix || mGivenVersion === "*") {
          aPrefixes.push(oBrowser.prefix);
        }
      }
    }
  }
  return lodash.unique(aPrefixes);
};
