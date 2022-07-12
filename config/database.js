module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-34-225-159-178.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd4rj7gg80f3mns'),
      user: env('DATABASE_USERNAME', 'aovcsosbyanert'),
      password: env('DATABASE_PASSWORD', '9888ee156d7fa1dc94e180e2713fdfc029668a24977dde984e23bb00d5804c5f'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});