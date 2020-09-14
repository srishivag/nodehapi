


const { Model } = require('objection');

class Dislocat_fract extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'dislocat_fract';
  }
  static get idColumn() {
    return 'dislocat_fract_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['fracture_affect'],
      properties: {
        dislocat_fract_id: { type: 'integer' },
        dis_fract_affect: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Dislocat_fract;