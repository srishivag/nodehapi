const { Model } = require('objection');
class Workhours extends Model {
    static get tableName() {
        return '' + PREFIX + 'workhours';
    }
    static get idColumn() {
        return 'wid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['work_date'],
            properties: {
                wid: { type: 'integer' },
                work_date: { type: 'date' },
                planed_hours: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Workhours;