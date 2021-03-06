// Copyright 2015 OpenWhere, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var AWSClass = require('../AWSClass.js');
var S3BucketLifecycleconfigRuleTransition = require('../properties/S3BucketLifecycleconfigRuleTransition.js');
var S3BucketLifecycleconfigRuleNoncurrentversiontransition = require('../properties/S3BucketLifecycleconfigRuleNoncurrentversiontransition.js');

var propertyMap = {   'ExpirationDate': {'list': false, 'type': 'string'},
    'ExpirationInDays': {'list': false, 'type': 'number'},
    'Id': {'list': false, 'type': 'string'},
    'NoncurrentVersionExpirationInDays': {'list': false, 'type': 'number'},
    'NoncurrentVersionTransition': {'list': false,
                                     'type': 'S3BucketLifecycleconfigRuleNoncurrentversiontransition'},
    'Prefix': {'list': false, 'type': 'string'},
    'Status': {'list': false, 'type': 'string'},
    'Transition': {'list': false, 'type': 'S3BucketLifecycleconfigRuleTransition'}};

var Class = function (id) {
    return AWSClass.call(this, id, 'S3BucketLifecycleconfigRule', {});
};
require('util').inherits(Class, AWSClass);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;