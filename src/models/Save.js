const { Model } = require('objection');

class Save extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'save_as_draft';
    }
    static get idColumn() {
        return 'ref_num';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: [],
            properties: {
                ref_num: { type: 'string' },
                form: { type: 'integer' },
                data: { type: 'string' },
               sub_location: { type: 'string' },
               majorlocation: { type: 'string' },
               minorlocation: { type: 'string' },
               otherMinorlocation: { type: 'string' },
                person_id: { type: 'string' },
                person_name: { type: 'string' },
                Occupation: { type: 'string' },
                person_status: { type: 'string' },
                type_of_invlmnt: { type: 'string' },
                injury_health_symptoms: { type: 'string' },
                part_of_body_affected: { type: 'string' },
                immdte_actn_taken: { type: 'string' },
                remarks: { type: 'string' },
                equipment_id: { type: 'string' },
                equipment_name: { type: 'string' },
                equipment_type: { type: 'string' },
                equipment_Status: { type: 'string' },
                equipment_Type_of_contribution: { type: 'string' },
                Damage_recieved: { type: 'string' },
                equipment_imm_act_tkn: { type: 'string' },
                equipment_Estimated_damage_cost: { type: 'string' },
                equipment_remarks: { type: 'string' },
                substance_id: { type: 'string' },
                substance_name: { type: 'string' },
                substance_type: { type: 'string' },
                substance_status: { type: 'string' },
                substance_phase: { type: 'string' },
                substance_damage: { type: 'string' },
                substance_Immediate_Action_Taken: { type: 'string' },
                substanceEstimated_damage_cost: { type: 'string' },
                substance_remarks: { type: 'string' },
                premises_id: { type: 'string' },
                premises_name: { type: 'string' },
                premises_type: { type: 'string' },
                Contributing_factor: { type: 'string' },
                premises_Immediate_action_taken: { type: 'string' },
                premises_remarks: { type: 'string' },
                created_at: { type: 'date' },
                updated_at: { type: 'datetime' },
                user_id: { type:'string'},
                incident_id:{type:'integer'},
                incident_number:{ type:'string'},
                incident_temp_id:{ type:'string'},
                
               adverseEvent: { type: 'string' },
               details_adverseEvent:{ type: 'string' },
                created_at: { type: 'date' },
                updated_at: { type: 'datetime' },
                user_id: { type:'string'},
                incident_name:{type:'string'},
                incident_temp_id: { type: 'string' },
                temp_id: { type: 'string' },
                incident_id: { type: 'integer' },
                incident_number: { type: 'string' },
                incident_time: { type: 'string' },

            }
        };
    }
}
module.exports = Save;