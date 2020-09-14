const { Model } = require('objection');
class ptw_job_location extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_job_location';
    }
    static get idColumn() {
        return 'jobloc_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                jobloc_id: { type: 'integer' },
                locationname: { type: 'string' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' },
                updatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_job_location;