# Book4You

The repo contains the server and client sides of the Book4You project.
Book4You is a university project for [#20503 - Workshop: Advanced Programming with Java](http://www-e.openu.ac.il/courses/20503.htm) course.


## Our Stack
* [PostgreSQL 9.4](http://www.postgresql.org/)
* [Java 8](https://www.oracle.com/java/)
* [Spring 1.3.5](https://spring.io/)
* [Angular 2](https://angular.io/)
* [Angular CLI](https://github.com/angular/angular-cli)
* [Semantic UI](http://semantic-ui.com/)


## Installation
Install the project for development.

### **Client side:**

1. Run `npm install -g angular-cli` to install angular-cli.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to fire up dev server.
4. Open browser at [http://localhost:4200](http://localhost:4200).

### **Server side:**

1. Install PostgreSQL (you can use [this tutorial](https://www.codefellows.org/blog/three-battle-tested-ways-to-install-postgresql))

2. Create the database, and grunt the `postgres` user access
```
psql postgres -c "CREATE DATABASE bookforyou"
psql postgres -c "ALTER USER postgres WITH PASSWORD 'postgres'"
```
The database name and user name will be in `/server/src/main/resources/application.properties`.

3. Install the project
```
mvn clean install
```

4. Run it
```
java -jar target/book4you-0.0.1-SNAPSHOT.jar
```
We take the target from the `pom.xml` file, and run it like: `target/<artifactId>-<version>.jar`.

Then go to [http://localhost:8080](http://localhost:8080) (the server default port can be changed in `/server/src/main/resources/application.properties` at `server.port` argument).

## Tests

  **Client side:**

  * Run `ng test --no-watch`.
  * Run `ng e2e`.

  **Server side:**

  * Not yet..


## License
MIT
