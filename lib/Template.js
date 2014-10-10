'use strict';

var fs = require('fs');

var Resource = require('./Resource.js');
var SecurityGroup = require('./ec2/SecurityGroup.js');
var Instance = require('./ec2/Instance.js');
var Parameter = require('./Parameter.js');
var InstanceProfile = require('./iam/InstanceProfile.js');
var Role = require('./iam/Role.js');
var Policy = require('./iam/Policy.js');
var AutoScalingGroup = require('./autoscaling/AutoScalingGroup.js');
var LaunchConfiguration = require('./autoscaling/LaunchConfiguration.js');
var LoadBalancer = require('./elasticloadbalancing/LoadBalancer.js');

/**
 * Used when constructing a CF Template file from JSON to ensure that the loaded
 * object is equal to the object that created the template
 **/
function buildLocalObjectFromDocObject(docObject){
    var localObj = {};
    for(var key in docObject){
        var node = docObject[key];
        localObj[key] = { id: key, node: node };
    }
    return localObj;
}

// Template constructor
var Template = function (doc) {
    doc = doc || {};
    this.template = {
        AWSTemplateFormatVersion: doc.AWSTemplateFormatVersion || '2010-09-09',
        Description: doc.Description || '',
        Parameters: doc.Parameters || {},
        Mappings: doc.Mappings || {},
        Conditions: doc.Conditions || {},
        Resources: doc.Resources || {},
        Outputs: doc.Outputs || {}
    };
    this.parameters = {};
    if (doc.Parameters){
        this.parameters = buildLocalObjectFromDocObject(doc.Parameters);
    }
    this.resources = {};
    if (doc.Resources){
        this.resources = buildLocalObjectFromDocObject(doc.Resources);
    }
};

Template.parseJSON = function (path) {
    var fileContents = fs.readFileSync(path, 'utf8');
    var json = JSON.parse(fileContents);
    return json;
};

Template.parse = function (path) {
    var template = new Template(Template.parseJSON(path));
    return template;
};

Template.prototype.save = function (path) {
    var contents = JSON.stringify(this.template, null, '    ');
    fs.writeFileSync(path, contents);
};

Template.Ref = function (refId) {
    return { 'Ref': refId };
};

Template.prototype.addResource = function (obj) {
    this.template.Resources[obj.id] = obj.node;
    this.resources[obj.id] = obj;
    return obj;
};

Template.prototype.getResource = function (id) {
    return this.resources[id];
};

Template.prototype.resource = function (id, type, properties) {
    return this.addResource(new Resource(id, type, properties));
};

Template.prototype.parameter = function (obj) {
    this.template.Parameters[obj.id] = obj.node;
    this.parameters[obj.id] = obj;
    return obj;
};

Template.prototype.ref = function (refId) {
    return Template.Ref(refId);
};

Template.FnGetAtt = function (resource, attribute) {
    return { 'Fn::GetAtt': [ resource, attribute]};
};

Template.prototype.fnGetAtt = function (resource, attribute) {
    return Template.FnGetAtt(resource, attribute);
};

Template.prototype.toJSON = function () {
    console.log(JSON.stringify(this.template, 2, ' '));
};

Template.prototype.securityGroup = function (id, description) {
    return this.addResource(new SecurityGroup(id, description));
};

Template.prototype.strParam = function (id, defaultValue, description) {
    return this.parameter(new Parameter(id, 'String', defaultValue, description));
};

Template.prototype.numParam = function (id, defaultValue, description, options) {
    return this.parameter(new Parameter(id, 'Number', defaultValue, description, options));
};

Template.prototype.output = function (id, value, description) {
    this.template.Outputs[id] = {
        Description: description,
        Value: value
    };
    return this;
};

Template.prototype.ec2Instance = function (id, description) {
    return this.addResource(new Instance(id, description));
};

Template.prototype.launchConfiguration = function (id) {
    var config = new LaunchConfiguration();
    this.template.Resources[id] = config.node;
    return config;
};

Template.prototype.autoScalingGroup = function (id) {
    return this.addResource(new AutoScalingGroup(id));
};

Template.prototype.iamInstanceProfile = function (id, path, roles) {
    var profile = new InstanceProfile(path, roles);
    this.template.Resources[id] = profile.node;
    return this;
};

Template.prototype.iamRole = function (id) {
    var role = new Role();
    this.template.Resources[id] = role.node;
    return role;
};

Template.prototype.iamPolicy = function (id) {
    var policy = new Policy();
    policy.name(id);
    this.template.Resources[id] = policy.node;
    return policy;
};

Template.prototype.loadBalancer = function (id) {
    var loadBalancer = new LoadBalancer();
    this.template.Resources[id] = loadBalancer.node;
    return loadBalancer;
};

module.exports = Template;