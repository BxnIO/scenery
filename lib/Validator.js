'use strict';

/**
 * This class is a wrapper around the aws-cli to assist with the validation of
 * CloudFormation templates (on the local filesystem)
 **/

var async = require('async');
var AWS = require('aws-sdk');
var fs = require('fs');

function Validator(templateFile) {
    this.templateFile = templateFile;
    return this;
}

Validator.prototype.setTemplateFile = function(path){
    var success = fs.exists(path);
    if(success){
        this.templateFile = path;
    }
    return success;
};

/**
 * validationCallback is a function with two arguments:
 *      + isValid - boolean indicating if template is valid or not
 *      + message - the result of the validation from aws-cli
 **/
Validator.prototype.validate = function(validationCallback){
    validationCallback = validationCallback || function(){ return false; };
    if(!this.templateFile){
        return validationCallback(false, 'No template file specified for validation');
    }

    var rootScope = this;
    var cloudformation = new AWS.CloudFormation();
    var params = { TemplateURL: this.templateFile };

    async.waterfall([
        // Run the aws-cli command defined above
        function(callback){
            cloudformation.validateTemplate(params, callback);
        },
        // Handle the results of the aws-cli command invoked above
        function(err, data, callback){
            if(err){
                callback(err, data);
            } else {
                callback(null, data);
            }
        }
    ], function(err, message){
        if(err){
            return validationCallback(false, err);
        }
        // Check for validation errors in the message
        if(message.indexOf('ValidationError') > -1){
            return validationCallback(false, message);
        }

        validationCallback(true, message);
    });
};

module.exports = Validator;