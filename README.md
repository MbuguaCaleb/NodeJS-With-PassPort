# NodeJS-With-PassPort

Node JS With Passport Authenctication Full Project

```
Passport is used for authentication of all types.

{
    Local Strategy(where you use the database directly),
    OAuth,
    Google,
    Github,
    JWT,
}

```

```
Project  uses EJS TO Display templates..

We will use MongoDB as our database..

Wow..FrontEnd  Frameworks..(eg react,vueJS)Must Learn

```

```
The DashBoard Route in this project is protected such that you cannot be able to have access to it without passing a token.

```

**Commands**

```

Any strategy you use with passport has to be accompanied with it as you key in the commands.

```

```
EJS..
Addresses how i bring layouts into my NodeJS PROJECTS...

Comes in Handy when you want to make a front end but not with react,vue or angular..

Bacause layouts will have to receive data coming from NodeJS.

(Therefore you initialize the Layouts into the Main Applicatiion)

.ejs is the extension for the blades while using EJS


A great way of building a fullstack nodeJS application from within NODE!!


When using EJS Every other view inherits from it by default

```

**Basics**

```
(a)res.render renders the views.
(b)Comments do not work in ejs.
(c)Once we login with passport we have access to the user object(all the fields we have in our database)..Same as when making a token with jwt.

(d)When getting data from the form we now have to use the body Parser Middleware which in now part of epress..
Body parser will enable you to get data from your form with request.body.

(e)Validations can also be done by destructuring or by 3 rd party packages..
Custom validations is made by initializing an empty array then passing in error messages..

You then make a custom partial...AND REUSE IT


(f)You can persist  data by a few tricks in ejs


(g)You normally create models in moongoose then you have methods which you can
call from within the model




```

**PROJECT DEPENDENCIES**

```

(a) npm i express bcryptjs passport passport-local ejs express-ejs-layouts mongoose connect-flash express-session

(b)npm i -D nodemon
```
