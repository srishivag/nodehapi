
const { Model } = require('objection');
class Incident2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'incident2';
    }
    static get idColumn() {
        return 'form_id';
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
                liklihoodaction: { type: 'string' },
                consequencesaction: { type: 'string' },
                name: { type: 'string' },
                colour: { type: 'string' },
                potential_likelihood: { type: 'string' },
                potential_consequences: { type: 'string' },
                remarks: { type: 'string' },
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
                incident_temp_id: { type: 'string' },
                temp_id: { type: 'string' },
                incident_id: { type: 'integer' },
                incident_number: { type: 'string' },
            }
        };
    }

}
module.exports = Incident2;