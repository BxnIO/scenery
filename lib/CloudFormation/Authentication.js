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
var Resource = require('../Resource.js');


var propertyMap = {   'accessKeyId': {'list': false, 'type': 'string'},
    'buckets': {'list': true, 'type': 'string'},
    'password': {'list': false, 'type': 'string'},
    'roleName': {'list': false, 'type': 'string'},
    'secretKey': {'list': false, 'type': 'string'},
    'type': {'list': false, 'type': 'string'},
    'uris': {'list': true, 'type': 'string'},
    'username': {'list': false, 'type': 'string'}};

var Class = function (id) {
    return Resource.call(this, id, 'AWS::CloudFormation::Authentication', {});
};
require('util').inherits(Class, Resource);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;