const { Model } = require('objection');

class Config_jsea extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_jsea';
    }
    static get idColumn() {
        return ' id';
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
module.exports = Config_jsea;