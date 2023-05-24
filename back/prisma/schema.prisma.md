### Get datas

### Migrations

If you do changes in the db schema, you have to generate a migration, and name it. You can name it depending on the changes you made so that we can understand what is the use of the migration you just created.
For exemple, if I want to add a table "Messages", I would name my migration, "adding_table_messages".
To generate the migration, please do :

```
npx prisma migrate dev --name adding_table_messages --schema=./back/prisma/schema.prisma
```

Or

```
npx prisma migrate dev --schema=./back/prisma/schema.prisma
```

And then, when the prompt ask you for a name, enter adding_table_messages

From your local terminal.
