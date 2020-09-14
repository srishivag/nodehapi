
const { Model } = require('objection');
class Form1 extends Model {
    static get tableName() {
        return '' + PREFIX + 'form1';
    }
    static get idColumn() {
        return 'form_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                form: { type: 'string' },
                pers_id: { type: 'string' },
                equip_id: { type: 'string' },
                prem_id: { type: 'string' },
                sub_id: { type: 'string' },
                title: { type: 'string' },
                incident_time: { type: 'string' },
                sub_location: { type: 'string' },
                otherMinorlocation: { type: 'string' },
                majorlocation: { type: 'string' },
                minorlocation: { type: 'string' },
                adverseEvent: { type: 'string' },
                details_adverseEvent: { type: 'string' },
                option: { type: 'string' },
                imdt_actn_details: { type: 'string' },
                pepole_at_risk: { type: 'string' },
                user_id: {type:'string'},
                incident_number: { type: 'string' },
                incident_temp_id: { type: 'string' },
                incident_id: { type: 'integer' }

            }
        };
    }

}
module.exports = Form1;