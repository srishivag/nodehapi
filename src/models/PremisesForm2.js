const { Model } = require('objection');
class PremisesForm2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'premisesform2';
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
                premises_id: { type: 'string' },
                premises_name: { type: 'string' },
                premises_type: { type: 'string' },
                Contributing_factor: { type: 'string' },
                imm_actn_taken: { type: 'string' },
                premi_remarks: { type: 'string' },
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
            }
        };
    }

}
module.exports = PremisesForm2;