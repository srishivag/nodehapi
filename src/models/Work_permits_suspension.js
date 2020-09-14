const { Model } = require('objection');
class Work_permits_suspension extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permits_suspension';
    }
    static get idColumn() {
        return 'wps_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['start_date'],
            properties: {
                wps_id: { type: 'integer' },

                wp_id: { type: 'integer' },

                start_date: { type: 'datetime' },

                end_date: { type: 'datetime' },

                reasons: { type: 'string' },

                comments_request: { type: 'string' },

                request_date: { type: 'datetime' },


                comments: { type: 'datetime' },

                relesecomment: { type: 'string' },

                suspended_by: { type: 'string' },

                actual_close: { type: 'datetime' },

                status: { type: 'integer' },

                created_on: { type: 'datetime' },

                updated_on: { type: 'datetime' },
            }
        };
    }

}
module.exports = Work_permits_suspension;