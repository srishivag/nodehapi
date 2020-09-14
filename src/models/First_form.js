
const { Model } = require('objection');

class First_form extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'details_of_involved_personnel';
    }
    static get idColumn() {
        return 'equipment_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                equipment_id: { type: 'integer' },
                //incident_id: { type: 'integer' },
                equipment_name: { type: 'string' },
                equipment_type: { type: 'stringr' },
                equipment_Status: { type: 'string' },
                equipment_Type_of_contribution: { type: 'string' },
                Damage_recieved: { type: 'string' },
                equipment_imm_act_tkn: { type: 'string' },
                equipment_Estimated_damage_cost: { type: 'string' },
                equipment_remarks: { type: 'string' },
                // per_remarks: { type: 'string' },
                // for_part: { type: 'integer' }
            }
        };
    }
}
module.exports = First_form;