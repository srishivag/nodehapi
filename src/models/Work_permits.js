const {
    Model
} = require('objection');
class Work_permits extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permits';
    }
    static get idColumn() {
        return 'wp_id';
    }
    static get relationMappings() {
        return {
            w: {
                relation: Model.BelongsToOneRelation,
                modelClass: link_work_permit,
                join: {
                    from: '' + PREFIX + 'lw.id ',
                    to: '' + PREFIX + ' w.type '
                }
            },
            w: {
                relation: Model.BelongsToOneRelation,
                modelClass: work_permit_extensions,
                join: {
                    from: '' + PREFIX + 'lr.wp_id ',
                    to: '' + PREFIX + 'w.wp_id '
                }
            },
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['wp_no'],
            properties: {
                wp_id: {
                    type: 'integer'
                },

                wp_no: {
                    type: 'string'
                },

                parent_id: {
                    type: 'integer'
                },

                description_of_work: {
                    type: 'string'
                },

                scope_type: {
                    type: 'string'
                },

                maintenance: {
                    type: 'string'
                },

                plant_or_area: {
                    type: 'string'
                },

                location: {
                    type: 'string'
                },

                assests: {
                    type: 'string'
                },

                requested_by: {
                    type: 'string'
                },

                oic_supervisors: {
                    type: 'string'
                },

                valid_from: {
                    type: 'datetime'
                },

                valid_upto: {
                    type: 'datetime'
                },

                priority: {
                    type: 'string'
                },

                emergency_person: {
                    type: 'string'
                },

                phone_located: {
                    type: 'string'
                },

                equipment_needed: {
                    type: 'string'
                },

                technical_skills: {
                    type: 'string'
                },

                mandatory_trainings: {
                    type: 'string'
                },

                persons_count: {
                    type: 'integer'
                },

                optional_trainings: {
                    type: 'string'
                },

                cancel_remarks: {
                    type: 'string'
                },

                cancel_date: {
                    type: 'datetime'
                },

                cancel_reason: {
                    type: 'integer'
                },

                surrender_date: {
                    type: 'datetime'
                },

                status: {
                    type: 'integer'
                },

                created_on: {
                    type: 'datetime'
                },

                updated_on: {
                    type: 'datetime'
                }
            }
        };
    }

}
module.exports = Work_permits;