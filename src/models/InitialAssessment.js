
const { Model } = require('objection');
class InitialAssessment extends Model {
    static get tableName() {
        return '' + PREFIX + 'initial_assessment';
    }
    static get idColumn() {
        return 'ref_num';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                draft: { type: 'integer' },
                next_status: { type: 'integer' },
                user_id: { type: 'string' },
                ref_num: { type: 'string' },
                form: { type: 'integer' },
                // personId: { type: 'integer' },
                name: { type: 'string' },
                designation: { type: 'string' },
                date_time: { type: 'string' }
            }
        };
    }

}
module.exports = InitialAssessment;