

const { Model } = require('objection');

class Loss_of_sight extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'loss_of_sight';
  }
  static get idColumn() {
    return 'loss_of_sight_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['loss_of_sight_affe'],
      properties: {
        loss_of_sight_id: { type: 'integer' },
        loss_of_sight_affe: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Loss_of_sight;