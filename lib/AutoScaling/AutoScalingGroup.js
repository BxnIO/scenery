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
var Taggable = require('../Taggable.js');
var notificationconfigurations = require('../properties/notificationconfigurations.js');
var tags = require('../properties/tags.js');
var metricscollection = require('../properties/metricscollection.js');

var propertyMap = {   'AvailabilityZones': {'list': true, 'type': 'string'},
    'Cooldown': {'list': false, 'type': 'string'},
    'DesiredCapacity': {'list': false, 'type': 'string'},
    'HealthCheckGracePeriod': {'list': false, 'type': 'number'},
    'HealthCheckType': {'list': false, 'type': 'string'},
    'InstanceId': {'list': false, 'type': 'string'},
    'LaunchConfigurationName': {'list': false, 'type': 'string'},
    'LoadBalancerNames': {'list': true, 'type': 'string'},
    'MaxSize': {'list': false, 'type': 'string'},
    'MetricsCollection': {'list': true, 'type': 'metricscollection'},
    'MinSize': {'list': false, 'type': 'string'},
    'NotificationConfigurations': {'list': true, 'type': 'notificationconfigurations'},
    'PlacementGroup': {'list': false, 'type': 'string'},
    'Tags': {'list': true, 'type': 'tags'},
    'TerminationPolicies': {'list': true, 'type': 'string'},
    'VPCZoneIdentifier': {'list': true, 'type': 'string'}};

var Class = function (id) {
    return Taggable.call(this, id, 'AWS::AutoScaling::AutoScalingGroup', {});
};
require('util').inherits(Class, Taggable);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;