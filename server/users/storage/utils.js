const pg = require('pg');
class StorageUtils {
    constructor() {
        this.connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
    }
    getConnectionString() {
        return this.connectionString;
    }

    client() {
        return new pg.Client(this.connectionString);
    }

    query(sqlQuery,parameterValues) {
        return new Promise((resolve, reject) => {
            const client = this.client();
            client.connect();
            const query = client.query(sqlQuery, parameterValues);
            query.on('row', function(row, result) {
              result.addRow(row);
            });
            query.on('end', (result) => {
                client.end();
                resolve(result);
            });
            query.on('error', function(error) {
                client.end();
                reject(error);
            });
        });
    }
}
module.exports = new StorageUtils();
