const { Model } = require('objection');

class Document_user_role extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'document_user_role';
  }
  static get idColumn() {
    return 'link_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['link_id'],
      properties: {
        link_id: { type: 'integer' },
        doc_id: { type: 'integer' },
        userid: { type: 'string' },
        role: { type: 'string'},
        status: { type: 'integer'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'},
      }
    };
  }
}
module.exports = Document_user_role;