import "isomorphic-fetch";

export function post(url, body, config) {
    let postConfig = Object.assign({}, config, {method: 'POST'});
    return httpSend(url, body, postConfig);
}

export function put(url, body, config) {
    let putConfig = Object.assign({}, config, {method: 'PUT'});
    return httpSend(url, body, putConfig);
}

function httpSend(url, body, config){
    return new Promise(
            function(resolve, reject) {
                if (!config) {
                    config = {};
                }
                let fetchConfig = {
                    method: config.method || 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/javascript, */*; q=0.01',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    credentials: config.credentials || 'same-origin',
                    mode: config.mode || 'cors',
                    cache: config.cache || 'no-cache',
                    body: JSON.stringify(body)
                };
                fetch(url, fetchConfig).then(function(response) {
                    if(response.status === 204){
                        resolve(response);
                    }else{
                        response.json().then(function(jsonResponse) {
                            resolve(jsonResponse);
                        });
                    }
                });
            }
        )
}

export function get(url, body, config) {
    return new Promise(
        function(resolve, reject) {
            if (!config) {
                config = {};
            }
            let fetchConfig = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                credentials: config.credentials || 'same-origin',
                mode: config.mode || 'cors',
                cache: config.cache || 'no-cache'
            };
            fetch(url, fetchConfig).then(function(response) {
                if(response.status === 204){
                    resolve(response);
                }else{
                    response.json().then(function(jsonResponse) {
                        resolve(jsonResponse);
                    });
                }
            });
        }
    )
}
