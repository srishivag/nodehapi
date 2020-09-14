
const { Model } = require('objection');
class Work_permit_isolation extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_isolation';
    }
    static get idColumn() {
        return 'wpis_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['isolation_text'],
            properties: {
                wpis_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                isolation_text: { type: 'text' },
                isolation_by: { type: 'string' } ,
               
                created_on: { type: 'datetime' } ,
                updated_on: { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_isolation;