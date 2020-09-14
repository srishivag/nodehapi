const { Model } = require('objection');
class Suggestions extends Model {
    static get tableName() {
        return '' + PREFIX + 'suggestions';
    }
    static get idColumn() {
        return 'sid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['link_id'],
            properties: {
                sid: { type: 'integer' },
               link_id: { type: 'integer' },
               suggestion: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' }
            }
        };
    }

}
module.exports = Suggestions;