const { Model } = require('objection');

class  Crush extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' crush';
  }
  static get idColumn() {
    return 'crush_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_par_aff'],
      properties: {
        crush_id: { type: 'integer' },
        body_par_aff: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports =  Crush;