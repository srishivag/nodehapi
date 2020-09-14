const { Model } = require('objection');

class Substances extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'substance';
  }
  static get idColumn() {
    return 'substance_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['type'],
      properties: {
        substance_id: { type: 'integer' },
        form:{ type: 'integer' },
        step:{type:'integer'},
        substance_name: { type: 'string' },
        substance_type: { type: 'string' },
        substance_status: { type: 'string' },
        substance_phase: { type: 'string' },
        substance_damage: { type: 'string' },
        substance_Immediate_Action_Taken: { type: 'string' },
        substanceEstimated_damage_cost: { type: 'string' },
        substance_remarks: { type: 'string' },
        sub_remarks:{ type: 'string' },
        user_id: {type:'string'},
        //for_part: { type: 'string' }
        relevant_type: { type: 'string' },
        filename: { type: 'string' },
        imageName: {type: 'string'},
      }
    };
  }
}
module.exports = Substances;