const {
    Model
  } = require('objection');
  
  class Asset_substance extends Model {
    // Table name is the only required property.
    static get tableName() {
      return '' + PREFIX + 'asset_substance';
    }
    static get idColumn() {
      return 'substance_id';
    }
     
    static get jsonSchema() {
      return {
        type: 'object',
        // required: ['roleid'],
        properties: {
            substance_id: { type: 'integer' },
            substance_name: { type: 'string' },
            created_at: { type: 'datetime' },
            updated_at: { type: 'datetime' },
          
        }
      };
    }
  }
  module.exports = Asset_substance;