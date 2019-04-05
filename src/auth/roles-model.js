'use strict';

const mongoose = require('mongoose');
/**
 * @name rolesSchema
 * defines the properties of a role
 */
const rolesSchema = new mongoose.Schema({
  role: {type: String, required:true},
  capabilities: {type: Array, required:true},
});

module.exports = mongoose.model('roles', rolesSchema);
