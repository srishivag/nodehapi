
const { Model } = require('objection');

class Equipments extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'equipments';
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
                form:{ type: 'integer' },
                step:{type:'integer'},
                incident_id: { type: 'integer' },
                incident_number:{ type: 'string' },
                incident_temp_id:{ type: 'string' },
                equipment_name: { type: 'string' },
                equipment_type: { type: 'string' },
                equipment_Status: { type: 'string' },
                equipment_Type_of_contribution: { type: 'string' },
                Damage_recieved: { type: 'string' },
                equipment_imm_act_tkn: { type: 'string' },
                equipment_Estimated_damage_cost: { type: 'string' },
                equipment_remarks: { type: 'string' },
                equip_remarks: {type:'string'},
                user_id: {type:'string'},
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
                temp_id:{type: 'string'}
                // equip_remarks:{type: 'string'}
                // per_remarks: { type: 'string' },
                // for_part: { type: 'integer' }
             
            }


        };
    }
}
module.exports = Equipments;