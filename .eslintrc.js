{import('eslint').Linter.Config} 
require('dotenv').config()



module.exports = {
  plugins: [ "@ts-safeql/eslint-plugin"],
    // exclude `parserOptions` if you are not using TypeScript
    parserOptions: {
      project: './tsconfig.json',
    },
  rules: {
    '@ts-safeql/check-sql': [
      'error',
      {
        connections: [
          {
            connectionURL: process.env.DATABASE_URL,
            // The migrations path:
            migrationsDir: './prisma/migrations',
            targets: [
              // This makes `prisma.$queryRaw` and `prisma.$executeRaw` commands linted
              { tag: 'prisma.+($queryRaw|$executeRaw)', transform: '{type}[]' },
            ],
          },
        ],
      },
    ],
  },
}
}