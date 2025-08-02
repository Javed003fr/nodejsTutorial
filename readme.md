**HTTP Methods**
GET - Read Data
POST - Insert Data
PUT - Update Data
DELETE- Delete Data

GET www.store.com/api/orders - get all orders
POST www.store.com/api/orders - place an order (send data)
GET www.store.com/api/orders/:id - get single order (path params)
PUT www.store.com/api/orders/:id - update specific order (params + send data)
DELETE www.store.com/api/orders/:id - delete order (path params)

=========================

**Routing in ExpressJS**

app.METHOD(PATH, HANDLER);

Aroute in ExpressJS consists of:

- METHOD -> HTTP method (GET, POST, PUT, DELETE)
- PATH -> URL route (e.g., /, /users)
- HANDLER -> Function that runs when the route is accessed

Express allows dynamic routing using route parameters and query stirngs.

_Dynamic Routes parameter_

- http://localhost:3000/user/John

* used to capture dynamic values from the URL
* Defined using :parameter_name.

_Query Strings parameter_

- http://localhost:3000/search?keyword=ExpressJS

* Used to pass optional data in the URL after ?.
* Extracted using req.query.

**HTTP Methods in ExpressJS**
ExpressJS supports various HTTP methods to handle different types of client request. The most commonly used methods in RESTful APIs are:

- GET
- POST
- PUT
- DELETE

**Handling a GET Request**

- Used to fetch data from the server.
- Parameters can be passed using route parameters or query stings.

**Handling a POST Request**

- Used to send data to the server and create a new resource.
- Requires middleware (express.json()) to handle JSON input.

  [example:
  app.post('/users', express.json(), (req, res) => {
  const {name, email} = req.body
  res.json({
  message: `User ${name} with email ${email} created successfully`
  })
  })
  ]

**Handling a PUT Request**

- Used to update and existing resource.
- Uses route parameters (req.params) to identify the resource.

  [example:
  app.put('/users/:id, express.json(), (req, res) => {
  const userId = req.params.id
  const {name, email} = req.body
  res.json({
  message: `User ${userId} updated to ${name}, ${email}`
  })
  })
  ]

**Handling a DELETE Request**

- Used to remove a resource from the server.
  [example:
  app.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  res.json({
  message: `User withe ID ${userId deleted successfully`
  })
  })
  ]

**Middleware in ExpressJS**
Middleware functions in ExpressJS are functions that exectue before the final request handler. They can:

- Modify the request (req) and response (res) objects
- End the request-response cycle
- Call the next middleware function in the stack

_Middleware Workflow_
Client Request -> Middlware -> Route Handler -> Response to Client

Middlware is essential for logging, authentication, request parsing, erro handling, etc.

**Types of Middleware in ExpressJS**

- Application-Level Middleware - applies to all routes in app
  -> app.use(loggerMiddleware)
- Router-Lever Middleware - applies to specific route groups
  -> router.use(authMiddleware)
- Built-in Middleware - comes with Express(exppress.json())
  -> app.use(express.json())
- Third-Party Middleware - external libraries for additional functionality
  -> app.use(cors())
- Error-Handling Middleware - handles errors in the request lifecycle
  -> app.use(errorHandler)

**Teplating Engine in ExpressJS**
a templating engine generates dynamic HTML by embedding JavaScript-like logic within an HTML file.

_Key Benefits_

- Keeps logic separate from presentation (HTML)
- Uses variables, loops, conditionals, and functions to generate contaent.

In ExpressJS, templating engines are used to render views dynamically by integrating them into the applicaton.

---------------xxxxxxxxxxxxxxxxx-----------------

Express.js
API VS SSR

API:

- API - JSON
- SEND - DATA
- RES.JSON()

SSR:

- SSR - TEMPLATE
- SEND - TEMPLATE
- RES.RENDER()

_Route Parameters_
we can access data by settingup Route Parameters

```
app.get("/api/products/:productId", (req, res) => {

  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  return res.json(singleProduct);
});
```

_Query String Parameters_
It also called url params, that is a way to send us small amount of information through the server using the url. this information is usualy use as parameters, for example query database or get a result.

If the user wants to search for specific parameters, they need provide the search Query parameter.

=> with 'if(){}' condition always make sure to "return"

(https://hn.algolia.com)

**Middleware in Express JS**
-Middleware are functions that executes during the request to the server, each middleware function has access to request and response object and when it comes functionality literally sky is the element.
-Middleware is literally everywhere in express.
-It is the heart and soul of express.
