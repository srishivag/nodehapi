
const { Model } = require('objection');
class Work_permits_tests_confi extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permits_tests_confi';
    }
    static get idColumn() {
        return 'tid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['test_name'],
            properties: {
                tid: { type: 'integer' },
                id: { type: 'integer' },
                test_name: { type: 'integer' },
                units: { type: 'string' } ,
                status: { type: 'integer' } ,
                created_at: { type: 'datetime' } 
                
            }
        };
    }

}
module.exports = Work_permits_tests_confi;