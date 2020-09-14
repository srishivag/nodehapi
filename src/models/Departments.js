const { Model } = require('objection');
const employee_structure = require('../models/Employee_structure');
const risk = require('./Risk');

class Departments extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'departments';
  }
  static get idColumn() {
    return 'id';
  }
  static get relationMappings() {
    return {
      td: {
        relation: Model.BelongsToOneRelation,
        modelClass: training_departments,
        join: {
          from: '' + PREFIX + ' d.id',
          to: '' + PREFIX + 'td.department_id'
        }
      },
      es: {
        relation: Model.BelongsToOneRelation,
        modelClass: employee_structure,
        join: {
          from: '' + PREFIX + 'd.short_name',
          to: '' + PREFIX + 'es.department'
        }
      },

      r: {
        relation: Model.BelongsToOneRelation,
        modelClass: risk,
        join: {
          from: '' + PREFIX + 'd.id',
          to: '' + PREFIX + 'r.dept_id'
        }
      },
    }
  }
  
  static get jsonSchema() {
    return {
      type: 'object',
      //required: ['id'],
      properties: {
        id: { type: 'integer' },
        short_name: { type: 'string' },
        fullname: { type: 'string' },
        status: { type: 'integer' }     
      }
    };
  }
}
module.exports = Departments;
