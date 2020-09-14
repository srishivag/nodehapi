const { Model } = require('objection');
class User_roles extends Model {
    static get tableName() {
        return '' + PREFIX + 'user_roles';
    }
    static get idColumn() {
        return 'urid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userid'],
            properties: {
                urid: { type: 'integer' },
                userid: { type: 'string' },
                role: { type: 'string' }
                
            }
        };
    }

}
module.exports = User_roles;