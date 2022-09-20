module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-cckuanhgp3jhcld5sttg-a"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dbencuentra"),
      user: env("DATABASE_USERNAME", "carlostoro"),
      password: env("DATABASE_PASSWORD", "DMP70EMiuWR12dlUPq9uYbhBkAlS3qg5"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
