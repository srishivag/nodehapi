const { Model } = require('objection');

class Link_jsea_wp extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_jsea_wp';
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
                jsea_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }
}
module.exports = Link_jsea_wp;