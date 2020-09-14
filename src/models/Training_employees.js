const { Model } = require('objection');
const training_types = require('../models/Training_types');
const departments = require('./Departments');
class Training_employees extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_employees';
    }
    static get idColumn() {
        return 'emp_id';
    }
    static get relationMappings() {
        return {
            tt: {
                relation: Model.BelongsToOneRelation,
                modelClass: training_types,
                join: {
                    from: '' + PREFIX + ' te.training_id',
                    to: '' + PREFIX + 'tt.training_id'
                }
            },
            d: {
                relation: Model.BelongsToOneRelation,
                modelClass: departments,
                join: {
                    from: '' + PREFIX + 'te.dept_id',
                    to: '' + PREFIX + 'd.id'
                }
            },
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['training_id'],
            properties: {
                emp_id: { type: 'string' },
                training_id: { type: 'integer' },
                dept_id: { type: 'integer' },
                emp_score: { type: 'integer' },
                due_date: { type: 'date' },
                created_at: { type: 'date' },
                result: { type: 'string' },
                status: { type: 'integer' },
                estimated_due_date: { type: 'datetime' }

            }
        };
    }

}
module.exports = Training_employees;