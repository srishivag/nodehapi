const { Model } = require('objection');

class Link_isolation_wp extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_isolation_wp';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['iso_id'],

            properties: {
                id: { type: 'integer' },
                iso_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                status: { type: "integer" },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }
}
module.exports = Link_isolation_wp;