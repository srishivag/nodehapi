const { Model } = require('objection');
const asset_eq_maintenance = require('../models/Asset_eq_maintenance');
const employees = require('../models/Employees');
class Asset_equipments extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_equipments';
    }
    static get idColumn() {
        return 'eq_id';
    }
    static get relationMappings() {
        return {
            em: {
                relation: Model.BelongsToOneRelation,
                modelClass: asset_eq_maintenance,
                join: {
                    from: '' + PREFIX + 'e.equipment_id',
                    to: '' + PREFIX + 'em.equipment_id'
                }
            },
            se: {
                relation: Model.BelongsToOneRelation,
                modelClass: employees,
                join: {
                    from: '' + PREFIX + 'e.requested_by',
                    to: '' + PREFIX + 'se.emp_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['equipment_name'],
            properties: {
                equipment_id: { type: 'integer' },
                eq_type: { type: 'string' },
                store_name: { type: 'string' },
                category: { type: 'string' },
                equipment_name: { type: 'string' },
                serial_number: { type: 'string' },
                pre_condition: { type: 'string' },
                impact: { type: 'string' },
                manufacture: { type: 'string' },
                year_of_manufacture: { type: 'date' },
                model: { type: 'string' },
                specifications: { type: 'string' },
                date_of_purchase: { type: 'date' },
                unit_price: { type: 'string' },
                supplier: { type: 'string' },
                warrenty_date: { type: 'date' },
                warrenty_status: { type: 'string' },
                maintenance_days: { type: 'integer' },
                requested_by: { type: 'string' },
                requested_purpose: { type: 'string' },
                UOM: { type: 'string' },
                Units: { type: 'string' },
                current_owner: { type: 'string' },
                comments: { type: 'string' },
                status: { type: 'integer' },
                lastmaintenesDate: { type: 'date' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }
}
module.exports = Asset_equipments;