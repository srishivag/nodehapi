
const { Model } = require('objection');
class Reporting_person extends Model {
    static get tableName() {
        return '' + PREFIX + 'reporting_person';
    }
    static get idColumn() {
        return 'rptng_prsn_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['rptng_prsn_id'],
            properties: {
                rptng_prsn_id: { type: 'integer' },
                reported_by: { type: 'string' },
                reporting_date: { type: 'datetime' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Reporting_person;