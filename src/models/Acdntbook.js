const { Model } = require('objection');
class Acdntbook extends Model {
    static get tableName() {
        return '' + PREFIX + 'acdnt_book';
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
                entered_in_to_acdnt_book: { type: 'string' },
                entry_in_acdnt_book: { type: 'string' },
                reference_time: { type: 'string' },
            }
        };
    }

}
module.exports = Acdntbook;