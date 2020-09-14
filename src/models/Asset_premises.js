
const { Model } = require('objection');
class Asset_premises extends Model {
    static get tableName() {
        return '' + PREFIX + 'Asset_premises';
    }
    static get idColumn() {
        return 'premises_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                premises_id:{ type: 'integer' },
                description: { type: 'string' },
              
            }
        };
    }

}
module.exports = Asset_premises;