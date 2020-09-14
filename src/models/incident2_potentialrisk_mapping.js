
const { Model } = require('objection');
class Incident2_potentialrisk_mapping extends Model {
    static get tableName() {
        return '' + PREFIX + 'incident2_potentialrisk_mapping';
    }
    static get idColumn() {
        return 'form_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                inc2_id: { type: 'integer' },
                liklihoodaction: { type: 'string' },
                consequencesaction: { type: 'string' },
                name: { type: 'string' },
                color: { type: 'string' },
                remarks: { type: 'string' },
            }
        };
    }

}
module.exports = Incident2_potentialrisk_mapping;