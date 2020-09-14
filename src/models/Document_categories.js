const { Model } = require('objection');

class Document_categories extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'document_categories';
  }
  static get idColumn() {
    return 'dc_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['dc_id'],
      properties: {
        dc_id: { type: 'integer' },
        category_code: { type: 'string' },
        category_name: { type: 'string' },
        status: { type: 'integer'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'},
      }
    };
  }
}
module.exports = Document_categories;