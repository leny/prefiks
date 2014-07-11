###
 * prefiks
 * https://github.com/Leny/prefiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

oCaniuseData = require "caniuse-db/data.json"

oAgents = oCaniuseData.agents

_getBrowser = ( sBrowserName ) ->
    # TODO add many more aliases
    switch sBrowserName.toLowerCase()
        when "ie", "internet explorer", "internet-explorer", "internet_explorer", "internetexplorer" then oAgents[ "ie" ]
        when "firefox", "ff" then oAgents[ "firefox" ]
        when "chrome" then oAgents[ "chrome" ]
        when "safari" then oAgents[ "safari" ]
        when "opera" then oAgents[ "opera" ]
        when "ios_saf", "ios" then oAgents[ "ios_saf" ]
        when "op_mini" then oAgents[ "op_mini" ]
        when "android" then oAgents[ "android" ]
        when "op_mob" then oAgents[ "op_mob" ]
        when "bb" then oAgents[ "bb" ]
        when "and_chr" then oAgents[ "and_chr" ]
        when "and_ff" then oAgents[ "and_ff" ]
        when "ie_mob" then oAgents[ "ie_mob" ]
        else null

module.exports = ( sFeature, sBrowser, sVersion = "*" ) ->
    throw new Error "Unknown browser '#{ sBrowser }' !" unless oBrowser = _getBrowser sBrowser
    throw new Error "Unknown feature '#{ sFeature }' !" unless oFeature = oCaniuseData.data[ sFeature ]

    # TODO
