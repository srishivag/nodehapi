const { Model } = require('objection');

class Asset_locations_supervisor extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_locations_supervisor';
    }
    static get idColumn() {
        return 'ls_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['loc_id'],

            properties: {
                ls_id: { type: 'integer' },
                loc_id: { type: 'integer' },
                supervisor: { type: 'string' },
                role: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }
}
module.exports = Asset_locations_supervisor;