const { Model } = require('objection');
class Wkp_audits_anaswers extends Model {
    static get tableName() {
        return '' + PREFIX + 'wkp_audits_anaswers';
    }
    static get idColumn() {
        return 'wkp_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['question_id'],
            properties: {
                wkp_id: { type: 'integer' },
                question_id: { type: 'integer' },
                answers: { type: 'string' },
                created_on: { type: 'datetime' },
                updated_on: { type: 'datetime' }
                
            }
        };
    }

}
module.exports = Wkp_audits_anaswers;