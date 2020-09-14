const { Model } = require('objection');

class Config_scope extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_scope';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['scope'],

            properties: {
                id: { type: 'integer' },
                scope: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' }
            }
        };
    }
}
module.exports = Config_scope;