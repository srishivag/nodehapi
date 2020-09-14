
const { Model } = require('objection');
class Questionnaire extends Model {
    static get tableName() {
        return '' + PREFIX + 'questionnaire';
    }
    static get idColumn() {
        return 'question_id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['question'],
            properties: {
                question_id: { type: 'integer' },
                question: { type: 'string' },
                audit_id: { type: 'integer' },
                weightage: { type: 'integer' },
                created_dt: {type:'datetime'},
                updated_dt : {type:'timestamp'}
               

            }
        };
    }

}
module.exports = Questionnaire;