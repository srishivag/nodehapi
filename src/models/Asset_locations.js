const { Model } = require('objection');

class Asset_locations extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_locations';
    }
    static get idColumn() {
        return 'loc_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['location_name'],

            properties: {
                loc_id: { type: 'integer' },
                location_name: { type: 'string' },
                parent_id: { type: 'integer' },
                coordinator: { type: 'string' },
                coordinator_status: { type: 'integer' },
                contact_no: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' }

            }
        };
    }
}
module.exports = Asset_locations;