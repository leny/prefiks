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

module.exports = ( sFeature, sBrowser, sVersion = ">=0" ) ->
    throw new Error "Unknown browser '#{ sBrowser }' !" unless oBrowser = oAgents[ sBrowser ]
    throw new Error "Unknown feature '#{ sFeature }' !" unless oFeature = oCaniuseData.data[ sFeature ]

    # TODO
