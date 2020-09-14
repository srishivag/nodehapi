
const { Model } = require('objection');
class Work_permits_test extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permits_test';
    }
    static get idColumn() {
        return 'teid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['tid'],
            properties: {
                teid: { type: 'integer' },
                wp_id: { type: 'integer' },
                tid: { type: 'integer' },
                value: { type: 'string' } ,
                conducted_name: { type: 'string' } ,
                conducted_date_time: { type: 'datetime' } ,
                created_on: { type: 'datetime' } 
                
            }
        };
    }

}
module.exports = Work_permits_test;