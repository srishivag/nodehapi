const { Model } = require('objection');

class Scalping extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'scalping';
  }
  static get idColumn() {
    return '		scalping_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_affe'],
      properties: {
        	scalping_id: { type: 'integer' },
            body_part_affe: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Scalping;