const { Model } = require('objection');
const Locations = require('../models/Locations');
const Departments = require('../models/Departments');
class Audits_departments extends Model {
    static get tableName() {
        return '' + PREFIX + 'audits_departments';
    }
    static get idColumn() {
        return 'audits_departments_id';
    }
    static get relationMappings() {
        return {

            location: {
                relation: Model.BelongsToOneRelation,
                modelClass: Locations,
                join: {
                    from: '' + PREFIX + 'audits_departments.audits_departments_id',
                    to: '' + PREFIX + 'locations.dept_id'
                }
            },
            d: {
                relation: Model.BelongsToOneRelation,
                modelClass: Departments,
                join: {
                    from: '' + PREFIX + 'ad.department_id',
                    to: '' + PREFIX + 'd.id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['department_id'],
            properties: {
                audits_departments_id: { type: 'integer' },
                audit_id: { type: 'integer' },
                department_id: { type: 'integer' },
                score: { type: 'float' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Audits_departments;