const { Model } = require('objection');

class Contract_licenses extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'contract_licenses';
    }
    static get idColumn() {
        return 'co_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['company_name'],

            properties: {
                co_id: { type: 'integer' },
                company_name: { type: 'string' },
                license_no: { type: 'string' },
                location: { type: 'string' },
                country: { type: 'string' },
                types: { type: 'string' },
                contact1: { type: 'string' },
                contact2: { type: 'string' },
                email_id: { type: 'string' },
                status: { type: 'integer' },
                valid_from: { type: 'date' },
                valid_to: { type: 'date' },
                created_on: { type: 'datetime' },
                updated_on: { type: 'datetime' },
            }
        };
    }
}

module.exports = Contract_licenses;