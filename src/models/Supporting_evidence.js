const { Model } = require('objection');
class Supporting_evidence extends Model {
    static get tableName() {
        return '' + PREFIX + 'supporting_evidence';
    }
    static get idColumn() {
        return 'sptng_evdnce_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
          // required: ['sptng_evdnce_id'],
            properties: {
                photograph: { type: 'string' },
                video: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Supporting_evidence;