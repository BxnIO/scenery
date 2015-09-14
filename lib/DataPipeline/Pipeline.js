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
var DatapipelinePipelinePipelinetag = require('../properties/DatapipelinePipelinePipelinetag.js');
var DatapipelinePipelineParametervalue = require('../properties/DatapipelinePipelineParametervalue.js');
var DatapipelinePipelineParameterobject = require('../properties/DatapipelinePipelineParameterobject.js');
var DatapipelinePipelinePipelineobject = require('../properties/DatapipelinePipelinePipelineobject.js');

var propertyMap = {   'Activate': {'list': false, 'type': 'boolean'},
    'Description': {'list': false, 'type': 'string'},
    'Name': {'list': false, 'type': 'string'},
    'ParameterObjects': {'list': false, 'type': 'DatapipelinePipelineParameterobject'},
    'ParameterValues': {'list': false, 'type': 'DatapipelinePipelineParametervalue'},
    'PipelineObjects': {'list': true, 'type': 'DatapipelinePipelinePipelineobject'},
    'PipelineTags': {'list': false, 'type': 'DatapipelinePipelinePipelinetag'}};

var Class = function (id) {
    return Resource.call(this, id, 'AWS::DataPipeline::Pipeline', {});
};
require('util').inherits(Class, Resource);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;