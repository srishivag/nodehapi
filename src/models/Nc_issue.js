const { Model } = require('objection');
class Nc_issue extends Model {
    static get tableName() {
        return '' + PREFIX + 'nc_issue';
    }
    static get idColumn() {
        return 'issue_id';
    }

    static get relationMappings() {
        return {
            e: {
                relation: Model.BelongsToOneRelation,
                modelClass: Employees,
                join: {
                    from: '' + PREFIX + 'audits.audit_id',
                    to: '' + PREFIX + 'audits_departments.audit_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nc_id'],
            properties: {
                issue_id: { type: 'integer' },

                nc_id: { type: 'string' },

                main_id: { type: 'integer' },

                parent_issue_id: { type: 'integer' },

                issue: { type: 'string' },

                details: { type: 'string' },

                location: { type: 'string' },

                observe_date_tm: { type: 'datetime' },

                impact: { type: 'string' },

                staff: { type: 'string' },

                deadline: { type: 'date' },

                status: { type: 'integer' },
                audit_id: { type: 'integer' },

                audit_response_id: { type: 'integer' },

                inspection_number: { type: 'string' },

                raised_by: { type: 'string' },

                req_deadline: { type: '	date' },

                req_request: { type: 'string' },

                req_status: { type: 'integer' },

                Escalate: { type: 'integer' },

                plan_imporve: { type: 'string' },
                created_at: { type: 'datetime' },

                updated_at: { type: 'datetime' }
            }
        };
    }

}
module.exports = Nc_issue;