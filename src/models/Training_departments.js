const { Model } = require('objection');
const training_types = require('../models/Training_types');
const departments = require('./Departments');
class Training_departments extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_departments';
    }
    static get idColumn() {
        return 'training_id';
    }
    static get relationMappings() {
        return {
            tt: {
                relation: Model.BelongsToOneRelation,
                modelClass: training_types,
                join: {
                    from: '' + PREFIX + 'td.training_id',
                    to: '' + PREFIX + 'tt.training_id'
                }
            },
            d: {
                relation: Model.BelongsToOneRelation,
                modelClass: departments,
                join: {
                    from: '' + PREFIX + 'td.department_id',
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
                training_id: { type: 'integer' },
                department_id: { type: 'integer' },
                pass_percent: { type: 'float' },
                status: { type: 'integer' }
            }
        };
    }

}
module.exports = Training_departments;