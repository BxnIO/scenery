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
var OpsworksInstanceTimebasedautoscaling = require('../properties/OpsworksInstanceTimebasedautoscaling.js');

var propertyMap = {   'AmiId': {'list': false, 'type': 'string'},
    'Architecture': {'list': false, 'type': 'string'},
    'AutoScalingType': {'list': false, 'type': 'string'},
    'AvailabilityZone': {'list': false, 'type': 'string'},
    'EbsOptimized': {'list': false, 'type': 'boolean'},
    'InstallUpdatesOnBoot': {'list': false, 'type': 'boolean'},
    'InstanceType': {'list': false, 'type': 'string'},
    'LayerIds': {'list': true, 'type': 'string'},
    'Os': {'list': false, 'type': 'string'},
    'RootDeviceType': {'list': false, 'type': 'string'},
    'SshKeyName': {'list': false, 'type': 'string'},
    'StackId': {'list': false, 'type': 'string'},
    'SubnetId': {'list': false, 'type': 'string'},
    'TimeBasedAutoScaling': {'list': false, 'type': 'OpsworksInstanceTimebasedautoscaling'}};

var Class = function (id) {
    return Resource.call(this, id, 'AWS::OpsWorks::Instance', {});
};
require('util').inherits(Class, Resource);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;