const { Model } = require('objection');
class Work_permits_authorization extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permits_authorization';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['authorized_by'],
            properties: {
              id: { type: 'integer' },

              wp_id: { type: 'integer' },

              authorized_by: { type: 'string' },

              created_on: { type: 'datetime' }

            }
        };
    }

}
module.exports = Work_permits_authorization;