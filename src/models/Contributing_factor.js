
const { Model } = require('objection');
class Contributing_factor extends Model {
    static get tableName() {
        return '' + PREFIX + 'contributing_factor';
    }
    static get idColumn() {
        return 'cntrbtng_fctr_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cntrbtng_fctr_id'],
            properties: {
                cntrbtng_fctr_id: { type: 'integer' },
                contributing_factor_name: { type: 'string' },
                value: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Contributing_factor;