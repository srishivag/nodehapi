const { Model } = require('objection');
const asset_mainten_services = require('../models/Asset_mainten_services');
const asset_eq_maintenance_history = require('../models/Asset_eq_maintenance_history');
class Asset_eq_maintenance extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_eq_maintenance';
    }
    static get idColumn() {
        return 'em_id';
    }
    static get relationMappings() {
        return {
            ms: {
                relation: Model.BelongsToOneRelation,
                modelClass: asset_mainten_services,
                join: {
                    from: '' + PREFIX + 'em.ms_id',
                    to: '' + PREFIX + 'ms.ms_id'
                }
            },
            emh: {
                relation: Model.BelongsToOneRelation,
                modelClass: asset_eq_maintenance_history,
                join: {
                    from: '' + PREFIX + 'em.em_id',
                    to: '' + PREFIX + 'emh.em_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['eq_id'],

            properties: {
                em_id: { type: 'integer' },
                eq_id: { type: 'integer' },
                ms_id: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }
}
module.exports = Asset_eq_maintenance;