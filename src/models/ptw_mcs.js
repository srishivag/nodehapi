const { Model } = require('objection');
class ptw_mcs extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_mcs';
    }
    static get idColumn() {
        return 'mcs_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                mcs_id: { type: 'integer' },
                ptw_ref_id: { type: 'string' },
                ptw_id: { type: 'integer' },
                elementid: { type: 'integer' },
                quantity: { type: 'integer' },
                createdAt: { type: 'datetime' },
                updatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_mcs;