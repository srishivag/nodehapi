
const { Model } = require('objection');
class Work_permit_answers extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_answers';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['answer'],
            properties: {
                id: { type: 'integer' },
                wp_id: { type: 'integer' },
                question_id: { type: 'integer' },
                answer: { type: 'string' } ,
                created_on: { type: 'integer' } ,
                updated_on: { type: 'datetime' } 
                
            }
        };
    }

}
module.exports = Work_permit_answers;