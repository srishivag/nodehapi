
const { Model } = require('objection');
class Training_expiry extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_expiry';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['applicable_law'],
            properties: {
                id: { type: 'string' },
                applicable_law: { type: 'string' },
                rule_no: { type: 'string' },
                license_no: { type: 'string' } ,
                expiry_date: { type: 'date' } ,
                renewal_frequency: { type: 'integer' } ,
                remarks: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' } 
                
            }
        };
    }

}
module.exports = Training_expiry;