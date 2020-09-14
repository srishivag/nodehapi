const { Model } = require('objection');

class Link_ppe extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'link_ppe';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ppe_id'],

      properties: {
        id: { type: 'integer' },
        ppe_id: { type: 'integer' },
        lr_id: { type: 'integer' },
        status: { type: 'integer' },
        created_on: { type: 'datetime' },
        modified_on: { type: 'datetime' },
      }
    };
  }
}
module.exports = Link_ppe;