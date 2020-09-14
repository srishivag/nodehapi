const { Model } = require('objection');

class Asset_equipment_type extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'asset_equipment_type';
    }
    static get idColumn() {
        return 'eq_type_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['eq_type_id'],

            properties: {
                eq_type_id: { type: 'integer' },
                type: { type: 'string' },
                equipmement_status:{ type: 'string' },
                equip_contribution:{ type: 'string' },
                equip_damage:{ type: 'string' },
                equip_estimated:{ type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }
}
module.exports = Asset_equipment_type;