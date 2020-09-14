const { Model } = require('objection');
class Threats extends Model {
    static get tableName() {
        return '' + PREFIX + 'threats';
    }
    static get idColumn() {
        return 'threat_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['threat_type'],
            properties: {
                threat_id: { type: 'integer' },
                threat_type: { type: 'string' },
                status:{type:'integer'},
                created_on: { type: 'datetime' },
                updated_at:{type:'timestamp'}
            }
        };
    }

}
module.exports = Threats;