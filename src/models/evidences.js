const { Model } = require('objection');
class Evidences extends Model {
    static get tableName() {
        return '' + PREFIX + 'evidences';
    }
    static get idColumn() {
        return 'form_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                ref_num: { type: 'string' },
                form: { type: 'integer' },
                user_id: { type: 'string' },
                relevant_type: { type: 'string' },
                file_name: { type: 'string' },
                imageName: { type: 'string'},
                incident_number: { type: 'string' },
                incident_temp_id: { type: 'string' },
                incident_id: { type: 'integer' }
               
            }
        };
    }

}
module.exports = Evidences;