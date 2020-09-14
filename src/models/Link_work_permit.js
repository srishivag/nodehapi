const { Model } = require('objection');

class Link_work_permit extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_work_permit';
    }
    static get idColumn() {
        return 'id';
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    static get relationMappings() {
        return {
            w: {
                relation: Model.BelongsToOneRelation,
                modelClass: link_work_permit,
                join: {
                    from: '' + PREFIX + 'w.id ',
                    to: '' + PREFIX + 'lh.w_id'
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
            required: ['scope_id'],

            properties: {
                id: { type: 'integer' },
                wp_code: { type: 'string' },
                work_permit: { type: 'string' },
                training_id: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
                modified_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Link_work_permit;