const { Model } = require('objection');
class Training_types extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_types';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['training_name'],
            properties: {
               id: { type: 'integer' },
               aadhar: { type: 'string' },
               mobile: { type: 'string' },
               name: { type: 'string' } ,
               email: { type: 'string' } ,
               created_at: { type: 'datetime' } ,
               updated_at: { type: 'timestamp' } 
                
            }
        };
    }

}
module.exports = Training_types;