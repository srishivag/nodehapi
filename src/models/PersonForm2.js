
const { Model } = require('objection');
class PersonForm2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'personform2';
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
                person_id: { type: 'string' },
                person_name: { type: 'string' },
                occupation: { type: 'string' },
                person_status: { type: 'string' },
                type_of_invlmnt: { type: 'string' },
                injury_health_symptoms: { type: 'string' },
                part_of_body_affected: { type: 'string' },
                immdte_actn_taken: { type: 'string' },
                remarks: { type: 'string' },
                per_remarks: { type: 'string' },
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
                Assessors_input:{type:'string'},
                incident_number: { type: 'string' },
                incident_temp_id: { type: 'string' },
                incident_id: { type: 'integer' }
            }
        };
    }

}
module.exports = PersonForm2;