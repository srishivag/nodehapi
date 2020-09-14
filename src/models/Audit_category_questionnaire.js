const { Model } = require('objection');
class Audit_category_questionnaire extends Model {
    static get tableName() {
        return '' + PREFIX + 'audit_category_questionnaire';
    }
    static get idColumn() {
        return 'question_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['	category_id'],
            properties: {
                question_id: { type: 'integer' },
                category_id: { type: 'integer' },
                department_id: { type: 'integer' },
                question: { type: 'string' },
                weightage: { type: 'integer' },
                status: { type: 'integer' },
                display_order: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Audit_category_questionnaire;