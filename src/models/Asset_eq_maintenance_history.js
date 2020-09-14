const { Model } = require('objection');

class Asset_eq_maintenance_history extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_eq_maintenance_history';
    }
    static get idColumn() {
        return 'm_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['em_id'],

            properties: {
                m_id: { type: 'integer' },
                em_id: { type: 'integer' },
                maintenance_type: { type: 'string' },
                maintenance_schedules: { type: 'date' },
                done_by: { type: 'string' },
                maintenance_date: { type: 'date' },
                maintenance_cost: { type: 'string' },
                notes: { type: 'string' },
                result: { type: 'string' },
                closed: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' }

            }
        };
    }
}
module.exports = Asset_eq_maintenance_history;