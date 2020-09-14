const { Model } = require('objection');

class Link_hazards extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_hazards';
    }
    static get idColumn() {
        return 'id';
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    static get relationMappings() {
        return {
            lh: {
                relation: Model.BelongsToOneRelation,
                modelClass: link_risks,
                join: {
                    from: '' + PREFIX + 'lh.id  ',
                    to: '' + PREFIX + ' lr.hazard_id'
                }
            },
            link_hazards: {
                relation: Model.BelongsToOneRelation,
                modelClass: link_work_permit,
                join: {
                    from: '' + PREFIX + 'h.w_id ',
                    to: '' + PREFIX + '  w.id'
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
            required: ['question'],

            properties: {
                id: { type: 'integer' },
                hazard: { type: 'integer' },
                w_id: { type: 'integer' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
                modified_on: { type: 'datetime' },

            }
        };
    }
}
module.exports = Link_hazards;