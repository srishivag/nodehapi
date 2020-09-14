const {
    Model
} = require('objection');
class Risks extends Model {
    static get tableName() {
        return '' + PREFIX + 'risks';
    }
    static get idColumn() {
        return 'id';
    }
    static get relationMappings() {
        return {
            r: {
                relation: Model.BelongsToOneRelation,
                modelClass: risks,
                join: {
                    from: '' + PREFIX + 'r.id ',
                    to: '' + PREFIX + ' lr.risk_id'
                }
            },
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['r_code'],
            properties: {
                id: {
                    type: 'integer'
                },
                r_code: {
                    type: 'string'
                },
                risk: {
                    type: 'string'
                },
                status: {
                    type: 'integer'
                },
                created_on: {
                    type: 'datetime'
                },
                modified_on: {
                    type: 'datetime'
                }
            }
        };
    }

}
module.exports = Risks;