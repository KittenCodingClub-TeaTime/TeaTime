migration :
This container is used to manage prisma migrations. It execute them, then dies.

database :
The port is exposed for the sole purpose of generating migration on schema changes from the outside of the container.

rebuild just one container :

```bash
docker-compose build --no-cache back
```
