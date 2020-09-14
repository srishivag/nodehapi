
const { Model } = require('objection');

class Attachment_table extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_attachment_table';
    }
    static get idColumn() {
        return 'at_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                at_id: { type: 'integer' },
                ptw_id:{ type: 'integer' },
                ptw_ref_id:{type:'string'},
                doc_path: { type: 'string' },   
                file_name:{ type: 'string' },
                doc_type:{ type: 'integer' },
                doc_method: { type: 'boolean' },
                status: { type: 'boolean' },
                createdAt: { type: 'date' },
                updatedAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Attachment_table;