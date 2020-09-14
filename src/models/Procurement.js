const { Model } = require('objection');
class Procurement extends Model {
    static get tableName() {
        return '' + PREFIX + 'procurement';
    }
    static get idColumn() {
        return '	id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['value'],
            properties: {
                id: { type: 'integer' },
                ppe_id: { type: 'integer' },

                value: { type: 'integer' },

                description: { type: 'string' },
                proc_date: { type: '	date' },
                proc_status: { type: 'integer' },
                created_dt: { type: 'datetime' },
                updated_dt: { type: 'datetime' }
            }
        };
    }

}
module.exports = Procurement;