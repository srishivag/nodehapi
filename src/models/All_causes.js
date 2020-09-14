const { Model } = require('objection');

class All_causes extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'all_causes';
    }
    static get idColumn() {
        return 'ic_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cause_code'],
            properties: {
                ic_id: { type: 'integer' },
                cause_code: { type: 'string' },
                cause: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }
}
module.exports = All_causes;