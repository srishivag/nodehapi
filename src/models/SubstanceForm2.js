
const { Model } = require('objection');
class SubstanceForm2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'substanceform2';
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
                substance_id: { type: 'string' },
                sub_id: { type: 'integer' },
                substance_name: { type: 'string' },
                substance_type: { type: 'string' },
                substance_status: { type: 'string' },
                substance_phase: { type: 'string' },
                substance_damage: { type: 'string' },
                substance_Immediate_Action_Taken: { type: 'string' },
                substanceEstimated_damage_cost: { type: 'string' },
                substance_remarks: { type: 'string' },
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
                sub_remarks:{ type: 'string' },
                // user_id: {type: 'string'},
            }
        };
    }

}
module.exports = SubstanceForm2;