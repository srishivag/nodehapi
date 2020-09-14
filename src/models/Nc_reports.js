const { Model } = require('objection');
class 	Nc_reports extends Model {
    static get tableName() {
        return '' + PREFIX + 'nc_reports';
    }
    static get idColumn() {
        return 'report_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['issue_id'],
            properties: {
                report_id: { type: 'integer' },

                issue_id: { type: 'integer' },

                main_id: { type: 'integer' },

                report: { type: 'string' },

                details: { type: 'string' },

                report_date: { type: '	date' },

                supervisor: { type: 'string' },

                status: { type: 'integer' },

               created_at: { type: 'datetime' },

               updated_at: { type: 'datetime' }
            }
        };
    }

}
module.exports = Nc_reports;