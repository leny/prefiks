###
 * prefiks
 * https://github.com/Leny/prefiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

oCaniuseData = require "caniuse-db/data.json"
semver = require "semver"
lodash = require "lodash"

oAgents = oCaniuseData.agents

_getBrowser = ( sBrowserName ) ->
    # TODO add many more aliases
    sAgent = switch sBrowserName.toLowerCase()
        when "ie", "internet explorer", "internet-explorer", "internet_explorer", "internetexplorer" then "ie"
        when "firefox", "ff" then "firefox"
        when "chrome" then "chrome"
        when "safari" then "safari"
        when "opera" then "opera"
        when "ios_saf", "ios" then "ios_saf"
        when "op_mini" then "op_mini"
        when "android" then "android"
        when "op_mob" then "op_mob"
        when "bb" then "bb"
        when "and_chr" then "and_chr"
        when "and_ff" then "and_ff"
        when "ie_mob" then "ie_mob"
        else null
    if sAgent
        oAgent = oAgents[ sAgent ]
        oAgent[ "name" ] = sAgent
        return oAgent

module.exports = ( sFeature, sBrowser, mGivenVersion = "*" ) ->
    throw new Error "Unknown browser '#{ sBrowser }' !" unless oBrowser = _getBrowser sBrowser
    throw new Error "Unknown feature '#{ sFeature }' !" unless oFeature = oCaniuseData.data[ sFeature ]

    aPrefixes = []

    # TODO: if mGivenVersion is numeric

    return [] unless oBrowserFeatureImplementations = oFeature.stats[ oBrowser.name ]

    for sVersion, sImplementation of oBrowserFeatureImplementations when semver.satisfies sVersion, mGivenVersion
        if sImplementation and sImplementation.indexOf( "x" ) isnt -1
            bUseDefaulfPrefix = yes
            if oBrowser.prefix_exceptions
                for sPrefixExceptionVersion, sExceptionPrefix of oBrowser.prefix_exceptions when semver.satisfies sPrefixExceptionVersion, mGivenVersion
                    bUseDefaulfPrefix = no
                    aPrefixes.push sExceptionPrefix
            aPrefixes.push oBrowser.prefix if bUseDefaulfPrefix or mGivenVersion is "*"

    lodash.unique aPrefixes
