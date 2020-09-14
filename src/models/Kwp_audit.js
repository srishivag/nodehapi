const { Model } = require('objection');

class Kwp_audit extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'kwp_audit';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['question'],

            properties: {
                id: { type: 'integer' },
                question: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }
}
module.exports = Kwp_audit;