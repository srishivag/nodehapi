const { Model } = require('objection');

class Auth_details extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_auth_deatils';
    }
    static get idColumn() {
        return 'authid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                authid: { type: 'integer' },
                ptw_ref_id:{type:'string'},
                ptw_id:{ type: 'integer' },
                status: { type: 'boolean' },
                auth_list_id:{ type: 'integer'},
                typeofemploye:{ type: 'boolean'},
                empid: { type: 'string'},
                cretaedAt: { type: 'date' },
                updatedAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Auth_details;