const { Model } = require('objection');
class Ppe_stores extends Model {
    static get tableName() {
        return '' + PREFIX + 'ppe_stores';
    }
    static get idColumn() {
        return '	id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['ppe_id'],
            properties: {
                id: { type: 'integer' },
                ppe_id: { type: 'integer' },
                type: { type: 'string' },
                value: { type: 'integer' },
                in_date: { type: 'date' },
                balance: { type: 'integer' },
                description: { type: 'string' },
                wp_no: { type: 'string' },
                created_on: { type: 'datetime' }

            }
        };
    }

}
module.exports = Ppe_stores;