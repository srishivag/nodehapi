
const { Model } = require('objection');
class Premises_type extends Model {
    static get tableName() {
        return '' + PREFIX + 'premises_type';
    }
    static get idColumn() {
        return 'workplace_type_Id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['workplace_type_Id'],
            properties: {
                premises_type_Id: { type: 'integer' },
                value: { type: 'string' },
                status: { type: 'integer' },
            }
        };
    }

}
module.exports = Premises_type;