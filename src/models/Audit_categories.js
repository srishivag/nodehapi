const { Model } = require('objection');
class Audit_categories extends Model {
    static get tableName() {
        return '' + PREFIX + 'audit_categories';
    }
    static get idColumn() {
        return 'audit_category_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['audit_category'],
            properties: {
                audit_category_id: { type: 'integer' },
                audit_category: { type: 'string' },
                image: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Audit_categories;