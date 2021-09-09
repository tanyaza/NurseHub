
import * as url from "url";

let getParams = function (path, options) {
    var localVarUrlObj = url.parse(path, true);
    var localVarRequestOptions = Object.assign({}, {
        method: 'GET'
    }, options);
    var localVarHeaderParameter = {};
    var localVarQueryParameter = {};
    localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
    localVarUrlObj.search = null;
    localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
    return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions
    };
}

let deleteParams = function (path, options) {
    var localVarUrlObj = url.parse(path, true);
    var localVarRequestOptions = Object.assign({}, {
        method: 'DELETE'
    }, options);
    var localVarHeaderParameter = {};
    var localVarQueryParameter = {};
    localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
    localVarUrlObj.search = null;
    localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
    return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions
    };
}

let putParams = function (path, id, data, options) {
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
        //throw new RequiredError('id', 'Required parameter id was null or undefined when calling cityIdPut.');
    }

    var localVarPath = "/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
    var fullPath = path + localVarPath;
    var localVarUrlObj = url.parse(fullPath, true);
    var localVarRequestOptions = Object.assign({}, {
        method: 'PUT'
    }, options);
    var localVarHeaderParameter = {};
    var localVarQueryParameter = {};
    localVarHeaderParameter['Content-Type'] = 'application/json';
    localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
    localVarUrlObj.search = null;
    localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
    var needsSerialization = typeof editCityDTO !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
    localVarRequestOptions.body = needsSerialization ? JSON.stringify(data != null ? data : {}) : data || "";
    return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions
    };
}

let postParams = function (path, data, options) {
    var localVarUrlObj = url.parse(path, true);
    var localVarRequestOptions = Object.assign({}, {
        method: 'POST'
    }, options);
    var localVarHeaderParameter = {};
    var localVarQueryParameter = {};
    localVarHeaderParameter['Content-Type'] = 'application/json';
    localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

    localVarUrlObj.search = null;
    localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
    var needsSerialization = typeof createCityDTO !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
    localVarRequestOptions.body = needsSerialization ? JSON.stringify(data != null ? data : {}) : data || "";
    return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions
    };
}


let cache = {};

let cacheIt = function (key, value) {
    // todo: add expiration date
    cache[key] = value;
}

let readFromCache = function (key) {
    return cache[key];
}

let call = function (url, options, key) {
    if (key && cache[key])
        return readFromCache(key);

    return fetch(url, options)
        .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                var data = response.json();
                if (key) 
                    cacheIt(key, data);

                return data;

            } else {
                throw response;
            }
        });
}


const coreService = {
    deleteParams: deleteParams,
    getParams: getParams,
    putParams: putParams,
    postParams: postParams,
    call: call
};

export default coreService;