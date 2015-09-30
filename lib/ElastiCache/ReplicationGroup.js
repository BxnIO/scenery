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


var propertyMap = {   'AutoMinorVersionUpgrade': {'list': false, 'type': 'boolean'},
    'AutomaticFailoverEnabled': {'list': false, 'type': 'boolean'},
    'CacheNodeType': {'list': false, 'type': 'string'},
    'CacheParameterGroupName': {'list': false, 'type': 'string'},
    'CacheSecurityGroupNames': {'list': true, 'type': 'string'},
    'CacheSubnetGroupName': {'list': false, 'type': 'string'},
    'Engine': {'list': false, 'type': 'string'},
    'EngineVersion': {'list': false, 'type': 'string'},
    'NotificationTopicArn': {'list': false, 'type': 'string'},
    'NumCacheClusters': {'list': false, 'type': 'number'},
    'Port': {'list': false, 'type': 'number'},
    'PreferredCacheClusterAZs': {'list': true, 'type': 'string'},
    'PreferredMaintenanceWindow': {'list': false, 'type': 'string'},
    'ReplicationGroupDescription': {'list': false, 'type': 'string'},
    'SecurityGroupIds': {'list': true, 'type': 'string'},
    'SnapshotArns': {'list': true, 'type': 'string'},
    'SnapshotRetentionLimit': {'list': false, 'type': 'number'},
    'SnapshotWindow': {'list': false, 'type': 'string'}};

var Class = function (id) {
    return Resource.call(this, id, 'AWS::ElastiCache::ReplicationGroup', {});
};
require('util').inherits(Class, Resource);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;