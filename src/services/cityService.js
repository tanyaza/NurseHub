import coreService from './coreService';
var BASE_PATH = "http://localhost".replace(/\/+$/, "");

function cityService(configuration) {

    //var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : portableFetch;
    var basePath = (configuration && configuration.basePath) || BASE_PATH;
    var serviceAddress = basePath + '/City';

    var get = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var localVarFetchArgs = coreService.getParams(serviceAddress, options);
        return coreService.call(localVarFetchArgs.url, localVarFetchArgs.options);
    }

    var remove = function (id) {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var localPath = serviceAddress + '/' + id;
        var localVarFetchArgs = coreService.deleteParams(localPath, options);
        return coreService.call(localVarFetchArgs.url, localVarFetchArgs.options);
    }

    function getById(id) {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var localPath = serviceAddress + '/' + id;
        var localVarFetchArgs = coreService.getParams(localPath, options);
        return coreService.call(localVarFetchArgs.url, localVarFetchArgs.options);
    }

    function edit(id, editCityDTO) {

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var localVarFetchArgs = coreService.putParams(serviceAddress, id, editCityDTO, options);
        return coreService.call(localVarFetchArgs.url, localVarFetchArgs.options);
    }

    function create(createCityDTO) {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var localVarFetchArgs = coreService.postParams(serviceAddress, createCityDTO, options);
        return coreService.call(localVarFetchArgs.url, localVarFetchArgs.options);

    }

    return {
        get: get,
        remove: remove,
        getById: getById,
        edit: edit,
        create: create
    };

};

export default cityService;