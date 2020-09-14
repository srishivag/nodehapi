const { Model } = require('objection');

class Link_scope_wp extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'link_scope_wp';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['scope_id'],

      properties: {
        id: { type: 'integer' },
        scope_id: { type: 'integer' },
        wp_id: { type: 'integer' },
        status: { type: 'integer' },
        created_on: { type: 'datetime' },
        modified_on: { type: 'datetime' },
      }
    };
  }
}
module.exports = Link_scope_wp;