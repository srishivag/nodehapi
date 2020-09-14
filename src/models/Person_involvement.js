
const { Model } = require('objection');

class Person_involvement extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' person_involvement';
  }
  static get idColumn() {
    return 'person_involvement_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        person_involvement_id: { type: 'integer' },
        nperson_involvement_name: { type: 'string' },
        person_involvement_create: { type: 'datetime' },
        person_involvement_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Person_involvement;