const { Model } = require('objection');
class RemarksForm2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'remarksForm2';
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
                fi_remarks: { type: 'string' },
            }
        };
    }

}
module.exports = RemarksForm2;