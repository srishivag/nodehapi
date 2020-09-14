const { Model } = require('objection');

class Category_List extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_category_list';
    }
    static get idColumn() {
        return 'cat_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                cat_id: { type: 'integer' },
                name: { type: 'string'},
                status: { type: 'boolean'},
                createdAt: { type: 'date' }
             
            }


        };
    }
}
module.exports = Category_List;