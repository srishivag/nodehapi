const { Model } = require('objection');
class ptw_doc_type extends Model {
    static get tableName() {
        return '' + PREFIX + 'ptw_doc_type';
    }
    static get idColumn() {
        return 'hpt_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                ptw_doc_id: { type: 'integer' },
                doc_type_name: { type: 'string' },
                status: { type: 'boolean' },
                createdAt: { type: 'datetime' },
                updatedAt: { type: 'datetime' }
            }
        };
    }
}
module.exports = ptw_doc_type;