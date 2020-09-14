const { Model } = require('objection');

class Link_risks extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'link_risks';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['risk_id'],

      properties: {
        id: { type: 'integer' },
        risk_id: { type: 'integer' },
        hazard_id: { type: 'integer' },
        status: { type: 'integer' },
        created_on: { type: 'datetime' },
        modified_on: { type: 'datetime' },
      }
    };
  }
}
module.exports = Link_risks;