
const { Model } = require('objection');

class Persons extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'persons';
    }
    static get idColumn() {
        return 'person_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                form:{ type: 'integer' },
                person_id: { type: 'integer' },
                incident_temp_id:{ type: 'stringr' },
                //temp_id:{ type: 'stringr' },
                //person_emp_id:{ type: 'stringr' },
                //form: { type: 'integer' },
                person_emp_id: { type: 'string' },
                temp_id:{ type: 'stringr' },
                step:{type:'integer'},
                person_name: { type: 'string' },
                person_occupation: { type: 'string' },
                person_status: { type: 'string' },
                type_of_invlmnt: { type: 'string' },
                injury_health_symptoms: { type: 'string' },
                part_of_body_affected: { type: 'string' },
                immdte_actn_taken: { type: 'string' },
                remarks: { type: 'string' },
                //incident_id:{ type: 'integer' },
                //incident_number:{ type: 'string' },
                // per_remarks:{type:'string'},
                // user_id: {type:'string'},
                // Assessors_input:{type:'string'},
                per_remarks: { type: 'string' },
                user_id: { type: 'string' },
                Assessors_input: { type: 'string' },
                // per_remarks: { type: 'string' },
                // for_part: { type: 'integer' }
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: { type: 'string' },
                incident_temp_id: { type: 'string' },
                temp_id: { type: 'string' },
                incident_id: { type: 'integer' },
                incident_number: { type: 'string' },
                need_follow_up:{type:'string'},
                present_condition:{type:'string'},
                no_of_days_lost:{type:'string'},
                status:{type:'string'}
            }


        };
    }
}
module.exports = Persons;