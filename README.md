# hanage-deno-bot

Hi! This is Hanage API for [ekibana](https://www.ekibana.com/)

※Hanage API is unofficial API

# Requirement

- Deno
- Hono

# Endpoints

## v1

### [stations]

`v1/stations` : List of ekibana stations.

### [schedules]

`v1/schedules` : List of ekibana all schedules.

`v1/schedules/:year` : List of ekibana schedules of year.

`v1/schedules/:year/:month` : List of ekibana schedules of month.

examples
```
v1/schedules
v1/schedules/2023
v1/schedules/2023/01
v1/schedules/2023/2
```
