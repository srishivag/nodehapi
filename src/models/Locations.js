const {
    Model
} = require('objection');
class Locations extends Model {
    static get tableName() {
        return '' + PREFIX + 'locations';
    }
    static get idColumn() {
        return 'location_id';
    }
    static get relationMappings() {
        return {
            ad: {
                relation: Model.BelongsToOneRelation,
                modelClass: Locations,
                join: {
                    from: '' + PREFIX + 'l.dept_id',
                    to: '' + PREFIX + 'audits_departments_id'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['location'],
            properties: {
                location_id: {
                    type: 'integer'
                },
                location: {
                    type: 'string'
                },
                new_location_id: {
                    type: 'integer'
                },
                dept_id: {
                    type: 'integer'
                },
                score: {
                    type: 'float'
                },
                supervisor: {
                    type: 'string'
                },
                location_type: {
                    type: 'string'
                },
                major_location: {
                    type: 'string'
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
module.exports = Locations;

