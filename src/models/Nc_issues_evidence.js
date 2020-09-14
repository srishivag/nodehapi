const { Model } = require('objection');
class Nc_issues_evidence extends Model {
    static get tableName() {
        return '' + PREFIX + 'nc_issues_evidence';
    }
    static get idColumn() {
        return 'ncev_id  ';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nc_id'],
            properties: {
                ncev_id: { type: 'integer' },
                nc_id: { type: 'integer' },
                nc_type: { type: 'string' },
                img: { type: 'string' },
                img_type: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' }

            }
        };
    }

}
module.exports = Nc_issues_evidence;