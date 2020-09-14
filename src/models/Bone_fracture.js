
const { Model } = require('objection');

class  Bone_fracture extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'bone_fracture';
  }
  static get idColumn() {
    return 'bone_fra_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_aff'],
      properties: {
        bone_fra_id: { type: 'integer' },
        body_part_aff: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports = Bone_fracture;