const { Model } = require('objection');

class Licenses_types extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'licenses_types';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['license_type'],

            properties: {
                id: { type: 'integer' },
                license_type: { type: 'string' },
                license_no: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Licenses_types;