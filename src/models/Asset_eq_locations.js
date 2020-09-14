const { Model } = require('objection');

class Asset_eq_locations extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_eq_locations';
    }
    static get idColumn() {
        return 'lc_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['eq_id'],

            properties: {
                lc_id: { type: 'integer' },
                eq_id: { type: 'integer' },
                location_id: { type: 'integer' },
                fromdate: { type: 'date' },
                todate: { type: 'date' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }


            }
        };
    }
}
module.exports = Asset_eq_locations;