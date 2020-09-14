
const { Model } = require('objection');
class Image extends Model {
    static get tableName() {
        return '' + PREFIX + 'image';
    }
    static get idColumn() {
        return 'form_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                user_id: { type: 'string' },
                relevant_type: { type: 'string' },
                file_name: { type: 'string' },
                filedata: { type: 'string' },
                imageName: { type: 'string'},
            }
        };
    }

}
module.exports = Image;