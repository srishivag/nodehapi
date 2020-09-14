const { Model } = require('objection');
const employess = require('../models/Employees');
class Appointments extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'appointments';
    }
    static get idColumn() {
        return 'id';
    }
    static get relationMappings() {
        return {
            e: {
                relation: Model.BelongsToOneRelation,
                modelClass: employess,
                join: {
                    from: '' + PREFIX + 'a.emp_code',
                    to: '' + PREFIX + 'e.emp_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['emp_code'],
            properties: {
                id: {
                    type: 'integer'
                },
                emp_code: {
                    type: 'string'
                },
                visitor_name: {
                    type: 'string'
                },
                dt: {
                    type: 'date'
                },
                purpose: {
                    type: 'string'
                },
                company: {
                    type: 'string'
                }
            }
        };
    }
}
module.exports = Appointments;