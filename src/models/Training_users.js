const { Model } = require('objection');
class Training_users extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_users';
    }
    static get idColumn() {
        return 'training_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['training_name'],
            properties: {
                training_id: { type: 'integer' },
                training_name: { type: 'string' },
                validity: { type: 'integer' },
                applicable_to: { type: 'string' } ,
                pass_percent: { type: 'integer' } ,
                video: { type: 'string' } ,
                status: { type: 'integer' } 
                
            }
        };
    }

}
module.exports = Training_users;