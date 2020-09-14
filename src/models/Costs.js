const { Model } = require('objection');

class Costs extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'costs';
    }
    static get idColumn() {
        return 'cid';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cid'],

            properties: {
                cid: { type: 'integer' },
                incident_type: { type: 'string' },
                cost_type: { type: 'string' },
                type: { type: 'string' },
                sub_type: { type: 'string' },
                details: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' },
            }
        };
    }
}
module.exports = Costs;