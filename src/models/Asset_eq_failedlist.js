const { Model } = require('objection');

class Asset_eq_failedlist extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_eq_failedlist';
    }
    static get idColumn() {
        return 'f_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['eq_id'],
            
            properties: {
                f_id: { type: 'integer' },
                eq_id: { type: 'integer' },
                failed_reasons: { type: 'string' },
                failed_on: { type: 'date' },
                created_on: { type: 'datetime' }

            }
        };
    }
}
module.exports = Asset_eq_failedlist;