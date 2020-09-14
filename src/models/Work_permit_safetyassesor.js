
const { Model } = require('objection');
class Work_permit_safetyassesor extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_safetyassesor';
    }
    static get idColumn() {
        return '	wpa_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['saftier_name'],
            properties: {
                wpa_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                saftier_name: { type: 'string' },

                ppe_id: { type: 'integer' } ,
                stores_status : { type: 'integer' } ,

                tot_emp_count	: { type: 'integer' } ,
                status : { type: 'integer' } ,

              created_on: { type: 'datetime' } ,
                updated_on : { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_safetyassesor;