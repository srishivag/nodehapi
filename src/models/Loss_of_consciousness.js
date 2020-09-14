const { Model } = require('objection');

class  Loss_of_consciousness extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'loss_of_consciousness';
  }
  static get idColumn() {
    return 'loss_of_cons_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_affe'],
      properties: {
        loss_of_cons_id: { type: 'integer' },
        body_part_affe: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports = Loss_of_consciousness;