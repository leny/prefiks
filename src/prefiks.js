/* leny/prefiks
 *
 * /src/prefiks.js - Main Entry point
 *
 * coded by leny@flatLand!
 * started at 02/04/2019
 */

import caniuseData from "caniuse-db/data.json";
import semver from "semver";
import lodash from "lodash";

const browsers={
    "ie": ["ie","internet explorer","internet-explorer","internet_explorer","internetexplorer"],
    "firefox": ["firefox","ff"],
    "chrome": ["chrome"],
    "safari": ["safari"],
    "opera": ["opera"],
    "ios_saf": ["ios_saf","ios","ios-safari"],
    "op_mini": ["op_mini","opera-mini","opera_mini","operamini"],
    "android":["android","android-browser"],
    "op_mob":["op_mob","opera-mobile","opera_mobile","operamobile"],
    "bb":["bb","blackberry","blackberry-browser"],
    "and_chr": [ "and_chr", "android-chrome", "android_chrome", "androidchrome" ],
    "and_ff": [ "and_ff", "android-firefox", "android_firefox", "androidfirefox" ],
    "ie_mob": [ "ie_mob", "ie-mobile", "ie_mobile", "iemobile" ],
};

const agents=caniuseData.agents;

const prefixSorter=( a="",b="" )=>a.length>b.length;

const getBrowser=( name="" )=>{
    let [ agent ]=Object.entries(browsers).find(([key,aliases])=>aliases.includes(name.toLowerCase()));

    if (agent) {
        const result=agents[agent];
        result.name=agent;
        return result;
    }
};

const versionToSemver=(version="")=>{
    const arr=version.split(".");

    while (arr.length<3){
        arr.push("0");
    }

    return arr.join(".");
};

export default (feature, browsers, givenVersion="*")=>{
    // TODO
};
