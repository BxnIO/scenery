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
var ResourceTag = require('../properties/ResourceTag.js');
var BeanstalkOptionSetting = require('../properties/BeanstalkOptionSetting.js');
var BeanstalkEnvironmentTier = require('../properties/BeanstalkEnvironmentTier.js');

var propertyMap = {   'ApplicationName': {'list': false, 'type': 'string'},
    'CNAMEPrefix': {'list': false, 'type': 'string'},
    'Description': {'list': false, 'type': 'string'},
    'EnvironmentName': {'list': false, 'type': 'string'},
    'OptionSettings': {'list': true, 'type': BeanstalkOptionSetting},
    'SolutionStackName': {'list': false, 'type': 'string'},
    'Tags': {'list': false, 'type': ResourceTag},
    'TemplateName': {'list': false, 'type': 'string'},
    'Tier': {'list': false, 'type': BeanstalkEnvironmentTier},
    'VersionLabel': {'list': false, 'type': 'string'}};

var Class = function (id) {
    return Taggable.call(this, id, 'AWS::ElasticBeanstalk::Environment', {});
};
require('util').inherits(Class, Taggable);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;