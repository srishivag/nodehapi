const { Model } = require('objection');

class Work_permit extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_type_of_permit';
    }
    static get idColumn() {
        return 'typeid';
    }

    static get jsonSchema() {
        return {    
            type: 'object',
            properties: {
                typeid: { type: 'integer'},
                name:{ type: 'string'},
                status: { type: 'boolean'},
                createdAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Work_permit;