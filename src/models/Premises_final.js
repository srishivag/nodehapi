
const { Model } = require('objection');
class Premises_final extends Model {
    static get tableName() {
        return '' + PREFIX + 'premises_final';
    }
    static get idColumn() {
        return 'premises_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['premises_id'],
                properties: {
                    premises_id: { type: 'string' },
                    // incident_id: { type: 'integer' },
                    description:{type:'string'},
                    premises_name: { type: 'string' },
                    premises_type: { type: 'string' },
                    Contributing_factor: { type: 'string' },
                    premises_Immediate_action_taken: { type: 'string' },
                    // upload_document: { type: 'string' },
                    premises_remarks: { type: "string" },
                    premi_remarks:{ type: "string" },
                    user_id: {type:'string'},
                    relevant_type: { type: 'string' },
                    filename: { type: 'string' },
                    imageName: {type: 'string'},
                    // for_part: { type: 'string' }
                }
        };
    }

}
module.exports = Premises_final;