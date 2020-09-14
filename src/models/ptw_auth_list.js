const { Model } = require('objection');

class Auth_list extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_auth_list';
    }
    static get idColumn() {
        return 'auth_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                auth_id: { type: 'integer' },
                auth_name: { type: 'string'},
                status: { type: 'boolean' },
                createdAt: { type: 'date' },
                updatedAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Auth_list;