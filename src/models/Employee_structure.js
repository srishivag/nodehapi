const { Model } = require('objection');
const departments = require('./Departments');
class Employee_structure extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'employee_structure';
  }
  static get idColumn() {
    return 'es_id';
  }
  static get relationMappings() {
    return {
      d: {
        relation: Model.BelongsToOneRelation,
        modelClass: departments,
        join: {
          from: '' + PREFIX + 'employee_structure.department',
          to: '' + PREFIX + 'd.short_name'
        }
      },
      e: {
        relation: Model.BelongsToOneRelation,
        modelClass: departments,
        join: {
          from: '' + PREFIX + 'employee_structure.emp_id',
          to: '' + PREFIX + 'e.emp_id '
        }
      },
      e: {
        relation: Model.BelongsToOneRelation,
        modelClass: departments,
        join: {
          from: '' + PREFIX + 'es.emp_id',
          to: '' + PREFIX + 'e.emp_id '
        }
      },
      e: {
        relation: Model.BelongsToOneRelation,
        modelClass: departments,
        join: {
          from: '' + PREFIX + 'es.reporting_to',
          to: '' + PREFIX + 'e.emp_id '
        }
      },
      aur: {
        relation: Model.BelongsToOneRelation,
        modelClass: all_user_roles,
        join: {
          from: '' + PREFIX + 'es.emp_id',
          to: '' + PREFIX + 'aur.emp_id'
        }
      },
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['es_id'],
      properties: {
        es_id: { type: 'integer' },
        emp_id: { type: 'string' },
        designation: { type: 'string' },
        department: { type: 'integer' },
        reporting_to: { type: 'integer' },
        change_date: { type: 'date' }
      }
    };
  }
}
module.exports = Employee_structure;
