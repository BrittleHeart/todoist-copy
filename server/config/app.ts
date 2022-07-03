export default {
  mysql: {
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: process.env.DATABASE_PORT ?? 3306,
    user: process.env.DATABASE_USER ?? 'root',
    password: process.env.DATABASE_PASSWD ?? '',
    database: process.env.DATABASE_NAME ?? '',
  },
}
