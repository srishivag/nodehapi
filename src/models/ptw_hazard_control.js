const { Model } = require('objection');
class ptw_hazard_control extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_hazard_control';
    }
    static get idColumn() {
        return 'hc_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                hc_id: { type: 'integer' },
                ptw_ref_id: { type: 'string' },
                ptw_id: { type: 'integer' },
                hazard_id: { type: 'integer' },
                control_id: { type: 'integer' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' },
                updatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_hazard_control;