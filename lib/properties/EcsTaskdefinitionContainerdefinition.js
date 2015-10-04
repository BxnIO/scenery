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
var EcsTaskdefinitionContainerdefinitionsMountpoint = require('../properties/EcsTaskdefinitionContainerdefinitionsMountpoint.js');
var EcsTaskdefinitionContainerdefinitionsEnvironment = require('../properties/EcsTaskdefinitionContainerdefinitionsEnvironment.js');
var EcsTaskdefinitionContainerdefinitionsPortmapping = require('../properties/EcsTaskdefinitionContainerdefinitionsPortmapping.js');
var EcsTaskdefinitionContainerdefinitionsVolumesfrom = require('../properties/EcsTaskdefinitionContainerdefinitionsVolumesfrom.js');

var propertyMap = {   'Command': {'list': true, 'type': 'string'},
    'Cp': {'list': false, 'type': 'number'},
    'EntryPoint': {'list': true, 'type': 'string'},
    'Environment': {'list': true, 'type': EcsTaskdefinitionContainerdefinitionsEnvironment},
    'Essential': {'list': false, 'type': 'boolean'},
    'Image': {'list': false, 'type': 'string'},
    'Links': {'list': true, 'type': 'string'},
    'Memory': {'list': false, 'type': 'number'},
    'MountPoints': {'list': true, 'type': EcsTaskdefinitionContainerdefinitionsMountpoint},
    'Name': {'list': false, 'type': 'string'},
    'PortMappings': {'list': true, 'type': EcsTaskdefinitionContainerdefinitionsPortmapping},
    'VolumesFrom': {'list': true, 'type': EcsTaskdefinitionContainerdefinitionsVolumesfrom}};

var Class = function (id) {
    return AWSClass.call(this, id, 'EcsTaskdefinitionContainerdefinition', {});
};
require('util').inherits(Class, AWSClass);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;