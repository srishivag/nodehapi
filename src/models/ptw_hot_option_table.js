const { Model } = require('objection');
class ptw_cold_option_tableHide extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_cold_option_tableHide';
    }
    static get idColumn() {
        return 'hpt_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                hpt_id: { type: 'integer' },
                option_name: { type: 'string' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' }
            }
        };
    }

}
module.exports = ptw_cold_option_tableHide;