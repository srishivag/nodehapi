const { Model } = require('objection');

class Document_types extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'document_types';
  }
  static get idColumn() {
    return 'dt_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['dt_id'],
      properties: {
        dt_id: { type: 'integer' },
        type_code: { type: 'string' },
        type_name: { type: 'string' },
        status: { type: 'integer'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'},
      }
    };
  }
}
module.exports = Document_types;