const { Model } = require('objection');
class Ppes extends Model {
    static get tableName() {
        return '' + PREFIX + 'ppes';
    }
    static get idColumn() {
        return '	id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['ppe_code'],
            properties: {
                id: { type: 'integer' },
                ppe_code: { type: 'string' },
                ppe_type: { type: 'string' },
                pair_type: { type: 'integer' },
                min_alert: { type: 'integer' },
                image: { type: 'string' },
                status: { type: 'integer' },
                created_on: {type:'datetime'},
                modified_on: {type:'datetime'}
            }
        };
    }

}
module.exports = Ppes;