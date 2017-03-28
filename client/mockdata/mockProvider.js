const fs = require("fs");
const util = require("util");
const replace = require("lodash/replace");
// const util = require('util'),

const mockdataConfig = {
    '/': {
        secure: false,
        bypass: function(req, res, proxyOptions) {
            if(req.method === 'POST' ) {
                return handlePOST(req, res, proxyOptions);
            } else {
                return handleGET(req, res, proxyOptions);
            }
        }
    }
}

function handlePOST(req, res, proxyOptions) {
    if(process.env.MOCK_SAVE_ALWAYS_SUCCESS) {
        let mockDataFile =  __dirname + '/success.json';
        let content = fs.readFileSync(mockDataFile, 'utf8');
        return res.json(JSON.parse(content));
    } else {
        return true;
    }
}

function handleGET(req, res, proxyOptions) {
    const url = req.url;
    var apiName = getApiName(url);
    console.log("get: " + apiName);
    const mockDataFile =  __dirname + apiName + '.json';
    if(fs.existsSync(mockDataFile)) {
        let content = fs.readFileSync(mockDataFile, 'utf8');
        return res.json(JSON.parse(content));
    }
    else {
        return true;
    }
}

function getApiName (url) {
    var apiName = replace(url, '?', '/');
    apiName = replace(apiName, '=', '/');
    return apiName;
}




module.exports = mockdataConfig;
