
const { Model } = require('objection');
class Premises extends Model {
    static get tableName() {
        return '' + PREFIX + 'premises';
    }
    static get idColumn() {
        return 'premises_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['premises_id'],
            properties: {
                //prem_id:{ type: 'integer' },
                form:{ type: 'integer' },
                step:{type:'integer'},
                //id: { type: 'integer' },
                premises_id:{ type: 'integer' },
                incident_id:{type:'integer'},
                premises_remarks:{type:'string'},
                premis_remarks:{type:'string'},
                // premises_id: { type: 'integer' },
                description: { type: 'string' },
                premises_type: { type: 'string' },
                contributing_factor: { type: 'string' },
                premises_Immediate_action_taken: { type: 'string' },
                upload_document: { type: 'string' },
                remarks: { type: "string" },
                for_part:{ type: 'integer' },
                incident_number: { type: "string" },
                incident_temp_id: { type: "string" },
                premises_name: {type:"string"},
                //incident_temp_id: { type: 'string' },
                temp_id: { type: 'string' },
                //incident_number: { type: 'string' },
                //form: { type: 'integer' },
                user_id: {type:'string'},
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
            }
        };
    }

}
module.exports = Premises;