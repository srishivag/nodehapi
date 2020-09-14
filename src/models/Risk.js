const { Model } = require('objection');
const threats = require('../models/Threats');
class Risk extends Model {
    static get tableName() {
        return '' + PREFIX + 'risk';
    }
    static get idColumn() {
        return 'risk_id';
    }
    static get relationMappings() {
        return {
            t: {
                relation: Model.BelongsToOneRelation,
                modelClass: threats,
                join: {
                    from: '' + PREFIX + 'r.threat_id',
                    to: '' + PREFIX + 't.threat_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['type_id'],
            properties: {
                risk_id: { type: 'integer' },
                risk_number: { type: 'string' },
                risk_description: { type: 'string' },
                threat_id: { type: 'integer' },
                type_id: { type: 'integer' },
                site: { type: 'string' },
                dept_id: { type: 'integer' },
                impact: { type: 'string' },
                likelihood: { type: 'string' },
                note: { type: 'string' },
                raised_by: { type: 'string' },
                status: { type: 'integer' },
                close_date: { type: 'date' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Risk;