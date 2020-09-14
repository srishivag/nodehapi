const { Model } = require('objection');
class ptw_control_list extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_control_list';
    }
    static get idColumn() {
        return 'pm_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                cid: { type: 'integer' },
                name: { type: 'string' },
                code: { type: 'string' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' },
                updatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_control_list;