test('should connect to PostgreSQL', async () => {
    const { Client } = require('pg');
    const client = new Client({
      user: 'admin',
      host: 'localhost',
      database: 'taller_db',
      password: '1459',
      port: 5432,
    });
  
    await client.connect();
    const res = await client.query('SELECT NOW()');
    expect(res.rows.length).toBeGreaterThan(0);
    await client.end();
  });