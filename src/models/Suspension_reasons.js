const { Model } = require('objection');
class Suspension_reasons extends Model {
    static get tableName() {
        return '' + PREFIX + 'suspension_reasons';
    }
    static get idColumn() {
        return 's_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['names'],
            properties: {
                s_id: { type: 'integer' },
               names: { type: 'string' },
               status: { type: 'integer' },
                created_on: { type: 'datetime' }  
            }
        };
    }

}
module.exports = Suspension_reasons;