const { Model } = require('objection');
class Work_permit_risks extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_risks';
    }
    static get idColumn() {
        return '	wpt_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['risk_id'],
            properties: {
                wpt_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                risk_id: { type: 'integer' },
                created_on: { type: 'datetime' } ,
                updated_on : { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_risks;