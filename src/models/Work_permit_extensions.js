
const { Model } = require('objection');
class Work_permit_extensions extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_extensions';
    }
    static get idColumn() {
        return 'id';
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    static get relationMappings() {
        return {

            wpe: {
                relation: Model.BelongsToOneRelation,
                modelClass: work_permit_safetyassesor,
                join: {
                    from: '' + PREFIX + ' wpe.id',
                    to: '' + PREFIX + ' wps.wp_id'
                }
            },
        }
    }
=======
>>>>>>> ce61fb815ea326ec28c4136bf2cb7a97c415147b
>>>>>>> afbaafaa5b78b921cbc57cb1e008bffe076847d3

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['extension_reason'],
            properties: {
                id: { type: 'integer' },
                wp_id: { type: 'integer' },
                ext_from_date: { type: 'datetime' },
                ext_to_date: { type: 'datetime' },
                extension_reason: { type: 'string' },
                hours: { type: 'string' },
                status: { type: 'mediumint' },
                created_dt: { type: 'datetime' }
            }
        };
    }

}
module.exports = Work_permit_extensions;