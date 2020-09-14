const { Model } = require('objection');
const All_user_roles = require('../models/All_user_roles');
class Employees extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'employees';
  }
  static get idColumn() {
    return 'eid';
  }
  static get relationMappings() {
    return {
      ar: {
        relation: Model.BelongsToOneRelation,
        modelClass: All_roles,
        join: {
          from: '' + PREFIX + 'aur.role',
          to: '' + PREFIX + 'ar.rid'
        }
      },
      aur: {
        relation: Model.BelongsToOneRelation,
        modelClass: All_user_roles,
        join: {
          from: '' + PREFIX + 'e.emp_id',
          to: '' + PREFIX + 'aur.emp_id'
        }
      },
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
     // required: ['eid'],
      properties: {
        eid: { type: 'integer' },
        emp_id: { type: 'string' },
        password: { type: 'string' },
        emp_name: { type: 'string' },
        gender: { type: 'string' },
        date_of_birth: { type: 'date' },
        email: { type: 'float' },
        contact1: { type: 'string' },
        contact2: { type: 'string' },
        designation: { type: 'date' },
        department: { type: 'string' },
        emergency_contact_name: { type: 'string' },
        emergency_contact1: { type: 'integer' },
        emergency_contact2: { type: 'integer' },
        relation: { type: 'string' },
        prev_experience: { type: 'float' },
        emp_type: { type: 'string' },
        vendor_id: { type: 'integer' },
        date_of_joining: { type: 'date' },
        date_of_leaving: { type: 'date' },
        health_issues: { type: 'string' },
        disabilities: { type: 'string' },
        phobias: { type: 'string' },
        allergies: { type: 'string' },
        locations: { type: 'integer' },
        status: { type: 'integer' },
        created_on: { type: 'date' },
        updated_on: { type: ' date' }
      }




    };
  }
}
module.exports = Employees;