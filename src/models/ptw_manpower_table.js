const { Model } = require('objection');
class ptw_manpower_table extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_manpower_table';
    }
    static get idColumn() {
        return 'pm_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                pm_id: { type: 'integer' },
                ptw_ref_id: { type: 'string' },
                ptw_id: { type: 'integer' },
                type: { type: 'integer' },
                categories: { type: 'string' },
                number: { type: 'integer' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' },
                updaatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_manpower_table;