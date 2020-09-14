
const { Model } = require('objection');
class EquipmentForm2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'equipmentform2';
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
                equipment_id: { type: 'integer' },
                equipment_name: { type: 'string' },
                equ_type: { type: 'string' },
                equ_status: { type: 'string' },
                equipment_Type_of_contribution: { type: 'string' },
                Damage_recieved: { type: 'string' },
                estimated_damage_cost: { type: 'string' },
                equipment_imm_act_tkn: { type: 'string' },
                equ_remarks: { type: 'string' },
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
            }
        };
    }

}
module.exports = EquipmentForm2;