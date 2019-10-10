# node-test-app

A quick Node.js test using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
git clone git@github.com:wibidev/node-test-app.git # or clone your own fork
cd node-test-app
npm install
npm start
```

## Instructions

This small RESTful API will make requests to an external web service: https://shibe.online/.
You have to build several endpoints that returns JSON.
Feel free to organize your files like it is a real API (think scalability).

You will implement a simple UI in React/Redux which allows us to visually browse API data.

### GET /shibes - Page "Shibes list"
Will make a request to fetch shibes from the external API.

### GET /cats - Page "Cats list"
Will make a request to fetch cats from the external API.

### GET /birds - Page "Birds list"
Will make a request to fetch birds from the external API.

### GET /animals - Page "Animals list"
Lists all type of animals

| Querystring parameter     |     Description       |     Required      | Default value  | Validations |
| ------------- |------------- |-------------| -----| -----|
| protocol  | Get https or http urls     | yes | none |Can only accept http or https |
| count   | Number of entries per animal type to return    | no      | 1  | Must be a number, min 1, max 30 |
| url | Get full URL or image ID   |   no      | true  |  true/false|

### Possible JSON outputs:

#### Success
```javascript
{
  type: 'success',
  code: 200,
  total: 1,
  data: {
    // GET shibes
    shibes: [
      { 
        // if url = false
        id: '404ae6ed024aa5f1b9001fd755abdebe87886a0e',
        // if url = true
        url: 'http://cdn.shibe.online/shibes/404ae6ed024aa5f1b9001fd755abdebe87886a0e.jpg' 
      }
    ],
    // GET /cats
    cats: [
      { 
        // if url = false
        id: '29dde01e04e1a3cf9e3aba4069cbb823fc2b4dbf',
        // if url = true
        url: 'http://cdn.shibe.online/cats/a825445d7e3d8db2d619b97065a9c26600a7ab25.jpg' 
      }
    ],
    // GET /birds
    birds: [
      { 
        // if url = false
        id: '1fba38e7a578b08895bb4d6fd39d7afff6d582c4',
        // if url = true
        url: 'http://cdn.shibe.online/birds/9d94c4c89bf669bce30e9ee32c7448800f843e78.jpg' 
      }
    ]
  }
}

```

#### Bad request

```
{
  type: 'badRequest',
  code: 400,
  errors: [
    { 
      param: 'protocol',
      message: ERROR_MESSAGE
    },
    { 
      param: 'count',
      message: ERROR_MESSAGE
    },
    { 
      param: 'url',
      message: ERROR_MESSAGE
    }
  ]
}

```

### Bonus:

Make a middleware that catch and log errors
