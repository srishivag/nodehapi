const { Model } = require('objection');
const Audits = require('../models/Audits');
class Responses extends Model {
    static get tableName() {
        return '' + PREFIX + 'responses';
    }
    static get idColumn() {
        return 'response_id';
    }
    static get relationMappings() {
        return {
            l: {
                relation: Model.BelongsToOneRelation,
                modelClass: Locations,
                join: {
                    from: '' + PREFIX + 'r.location_id',
                    to: '' + PREFIX + 'l.location_id'
                }
            },
            e: {
                relation: Model.BelongsToOneRelation,
                modelClass: Employees,
                join: {
                    from: '' + PREFIX + 'audits.created_by',
                    to: '' + PREFIX + 'e.emp_id '
                }
            },
            aud: {
                relation: Model.BelongsToOneRelation,
                modelClass: Audits,
                join: {
                    from: '' + PREFIX + 'res.audit_id',
                    to: '' + PREFIX + 'aud.audit_id '
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['audit_id'],
            properties: {
                response_id: { type: 'integer' },
                audit_id: { type: 'integer' },
                location_id: { type: 'integer' },
                question_id: { type: 'integer' },
                score: { type: 'float' },
                score_percent: { type: 'float' },
                nc: { type: 'integer' },
                nc_user: { type: 'string' },
                kaizen: { type: 'timestamp' },
                nc_duedate: { type: 'date' },
                remarks: { type: 'string' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Responses;