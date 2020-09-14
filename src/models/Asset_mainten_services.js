const { Model } = require('objection');

class Asset_mainten_services extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_mainten_services';
    }
    static get idColumn() {
        return 'ls_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['loc_id'],

            properties: {
                ms_id: { type: 'integer' },
                service_name: { type: 'string' },
                service_supervisor: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Asset_mainten_services;