
const { Model } = require('objection');
class Work_permit_hazards extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_hazards';
    }
    static get idColumn() {
        return 'wpt_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['hazard_id'],
            properties: {
                wpt_id: { type: 'integer' },
               wp_id: { type: 'integer' },
               hazard_id: { type: 'datetime' },
               created_on: { type: 'datetime' } ,
               
               updated_on: { type: 'string' } 
               
            }
        };
    }

}
module.exports = Work_permit_hazards;