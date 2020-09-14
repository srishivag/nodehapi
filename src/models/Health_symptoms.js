const { Model } = require('objection');

class  Health_symptoms extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'health_symptoms';
  }
  static get idColumn() {
    return '	hlt_symp_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['name'],
      properties: {
        hlt_symp_id: { type: 'integer' },
        name: { type: 'string' },
        status: { type: 'string' },
        create_at: { type: 'date' },
        update_at: { type: 'date' }

      }
    };
  }
}
module.exports =  Health_symptoms;