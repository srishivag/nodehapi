const { Model } = require('objection');

class Asset_suppliers extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_suppliers';
    }
    static get idColumn() {
        return 's_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['supplier_name'],

            properties: {
                s_id: { type: 'integer' },
                supplier_name: { type: 'string' },
                supplier_address: { type: 'string' },
                contact_no: { type: 'string' },
                email_id: { type: 'string' },
                servicetype: { type: 'string' },
                responsetime: { type: 'integer' },
                responsetype: { type: 'string' },
                location_id: { type: 'integer' },
                serviceprovided: { type: 'string' },
                servicecharges: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }

            }
        };
    }
}
module.exports = Asset_suppliers;