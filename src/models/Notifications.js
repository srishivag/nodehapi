const { Model } = require('objection');
class 	Notifications extends Model {
    static get tableName() {
        return '' + PREFIX + 'notifications';
    }
    static get idColumn() {
        return 'notification_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['	message'],
            properties: {
                notification_id: { type: 'integer' },

                emp_id: { type: 'string' },

                message: { type: 'string' },

                sender: { type: 'string' },

                category: { type: 'integer' },

                path: { type: '	string' },

                message_read: { type: 'integer' },
               created_at: { type: 'datetime' },

               updated_at: { type: 'timestamp' }
            }
        };
    }

}
module.exports = Notifications;