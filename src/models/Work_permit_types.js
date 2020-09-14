
const { Model } = require('objection');
class Work_permit_types extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_types';
    }
    static get idColumn() {
        return 'wpt_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['type'],
            properties: {
                wpt_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                type: { type: 'string' },
                created_on: { type: 'datetime' },
                updated_on: { type: 'datetime' }
            }
        };
    }

}
module.exports = Work_permit_types;