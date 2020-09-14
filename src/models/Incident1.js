
const { Model } = require('objection');
class Incident1 extends Model {
    static get tableName() {
        return '' + PREFIX + 'incident1';
    }
    static get idColumn() {
        return 'ref_num';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                inc1_id:{ type: 'integer' },
                incident_name:{ type: 'string' },
                draft: { type: 'integer' },
                next_status: { type: 'integer' },
                user_id: { type: 'string' },
                ref_num: { type: 'string' },
                form: { type: 'integer' },
                title: { type: 'string' },
                incident_time: { type: 'datetime' },
                reportedBy: { type: 'string' },
                adverseEvent: { type: 'string' },
                advrsetype: { type: 'string' },
                pepole_at_risk: { type: 'string' },
                imdt_actn_details: { type: 'string' },
                details_adverse_event: { type: 'string' },
                assessors_cmt_action: { type: 'string' },
                incident_temp_id: { type: 'string' },
                temp_id: { type: 'string' },
                incident_id: { type: 'integer' },
                incident_number: { type: 'string' },
                incident_temp_id:{type:'string'}


            }
        };
    }

}
module.exports = Incident1;