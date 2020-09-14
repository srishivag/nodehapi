const { Model } = require('objection');

class Link_wp_kwp_audit extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_wp_kwp_audit';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['kwp_audit_id'],

            properties: {
                id: { type: 'integer' },
                kwp_audit_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' },
            }
        };
    }
}
module.exports = Link_wp_kwp_audit;