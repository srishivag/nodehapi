const { Model } = require('objection');
class Riddor extends Model {
    static get tableName() {
        return '' + PREFIX + 'riddor';
    }
    static get idColumn() {
        return 'ref_num';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                ref_num: { type: 'string' },
                draft: { type: 'integer' },
                next_status: { type: 'integer' },
                user_id: { type: 'string' },
                form: { type: 'integer' },
                rid_reportable: { type: 'string' },
                reported_to_rid: { type: 'string' },
                riddor_time: { type: 'string' },
            }
        };
    }

}
module.exports = Riddor;