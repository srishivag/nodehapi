const {
    Model
} = require('objection');
const Audits_departments = require('../models/Audits_departments');
const Employees = require('../models/Employees');
const Audit_categories = require('../models/Audit_categories')
class Audits extends Model {
    static get tableName() {
        return '' + PREFIX + 'audits';
    }
    static get idColumn() {
        return 'audit_id';
    }
    static get relationMappings() {
        return {
            ad: {
                relation: Model.BelongsToOneRelation,
                modelClass: Audits_departments,
                join: {
                    from: '' + PREFIX + 'audits.audit_id',
                    to: '' + PREFIX + 'audits_departments.audit_id'
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
            ac: {
                relation: Model.BelongsToOneRelation,
                modelClass: Audit_categories,
                join: {
                    from: '' + PREFIX + 'audits.audit_category_id',
                    to: '' + PREFIX + 'ac.audit_category_id '
                }
            },
            e: {
                relation: Model.BelongsToOneRelation,
                modelClass: Employees,
                join: {
                    from: '' + PREFIX + 'audits.auditor',
                    to: '' + PREFIX + 'e.emp_id '
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['start_dt'],
            properties: {
                audit_id: {
                    type: 'integer'
                },
                audit_name: {
                    type: 'string'
                },
                start_dt: {
                    type: 'date'
                },
                end_dt: {
                    type: 'date'
                },

                auditor: {
                    type: 'string'
                },
                audit_type: {
                    type: 'integer'
                },
                audit_category_id: {
                    type: 'integer'
                },
                score: {
                    type: 'float'
                },
                stage: {
                    type: 'integer'
                },

                closed_dt: {
                    type: 'date'
                },
                status: {
                    type: 'integer    '
                },
                created_by: {
                    type: 'integer'
                },
                created_at: {
                    type: 'datetime'
                },
                updated_at: {
                    type: 'timestamp'
                }
            }
        };
    }

}
module.exports = Audits;