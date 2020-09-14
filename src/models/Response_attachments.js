const { Model } = require('objection');
class Response_attachments extends Model {
    static get tableName() {
        return '' + PREFIX + 'response_attachments';
    }
    static get idColumn() {
        return 'attach_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['response_id'],
            properties: {
                attach_id: { type: 'integer' },
                response_id: { type: 'integer' },
                filename: { type: 'string' },

            }
        };
    }

}
module.exports = Response_attachments;