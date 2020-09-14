
const { Model } = require('objection');
const training_types = require('../models/Training_types');
const training_employees = require('../models/Training_employees');
class Training_questions extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_questions';
    }
    static get idColumn() {
        return 'question_id';
    }
    static get relationMappings() {
        return {
            tt: {
                relation: Model.BelongsToOneRelation,
                modelClass: training_types,
                join: {
                    from: '' + PREFIX + 'tq.training_id',
                    to: '' + PREFIX + 'tt.training_id'
                }
            },
            te: {
                relation: Model.BelongsToOneRelation,
                modelClass: training_employees,
                join: {
                    from: '' + PREFIX + 'tt.training_id',
                    to: '' + PREFIX + 'te.training_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['training_id'],
            properties: {
                question_id: { type: 'string' },
                training_id: { type: 'integer' },
                question: { type: 'string' },
                option1: { type: 'string' },
                option2: { type: 'date' },
                option3: { type: 'integer' },
                option4: { type: 'string' },
                answer: { type: 'integer' },
                status: { type: 'integer' }

            }
        };
    }

}
module.exports = Training_questions;