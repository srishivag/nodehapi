const { Model } = require('objection');

class Personnel_status extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' personnel_status';
  }
  static get idColumn() {
    return '	prsonnel_sta_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        prsonnel_sta_id: { type: 'integer' },
        name: { type: 'string' },
        st_id: { type: 'string' },
        create_at: { type: 'datetime' },
        update_at: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Personnel_status;