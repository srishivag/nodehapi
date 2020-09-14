
const { Model } = require('objection');

class Substance_type extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'substance_type';
  }
  static get idColumn() {
    return 'substtype_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
     // required: ['status'],
      properties: {
        substtype_id: { type: 'integer' },
        name: { type: 'string' },
        sub_status:{ type: 'string' },
        sub_phase:{ type: 'string' },
        sub_quantity:{ type: 'string' },
        sub_cost:{ type: 'string' },
        created_at: { type: 'datetime' },
        updated_at: { type: 'timestamp' },
        status: { type: 'integer' }
      }
    };
  }
}
module.exports = Substance_type;