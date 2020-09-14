const { Model } = require('objection');

class Gatepasses extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'gatepasses';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'integer' },
        gatepassid: { type: 'string' },
        aadhar: { type: 'string' },
        role: { type: 'string' },
        image: { type: 'string' },
        visitor_type: { type: 'string' },
        vehicle_type:  { type: 'string' },
        vehicle_no: { type: 'string' },
        whom: { type: 'string' },
        purpose: { type: 'string' },
        driver: { type: 'string'},
        cleaner: { type: 'istring'},
        verification_time: { type: 'date'},
        entry_tm: { type: 'date'},
        exit_tm: { type: 'date'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'}
      }
    };
  }
}
module.exports = Gatepasses;