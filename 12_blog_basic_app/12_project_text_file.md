what we are using 

Appwrite = backend , image storage buckets,  database 
React = frontend libs 
text editor = api calls and mce servor - TinyMCE 
Parsing = html-react-parser 

as data of the artilces content stored in the html we need to parse 


Forms = react Hook form 

image ,text editor formatting, how to save in the backend all that 

production grade ...
secrets 
error handling 
auth sign up sign in
image uploading 


----------------------------------------------------------------------

WHAT A SLUG LOOKS LIKE

If you have a blog title:
"How to Learn React in 7 Days"

The slug will be:
"how-to-learn-react-in-7-days"



for create react app the variables in the should start in the REACT_APP_Secret_one
like this 



FOR VITE 
Env Variables
Vite exposes env variables under import.meta.env object as strings automatically.

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:

.env

VITE_SOME_KEY=123
DB_PASSWORD=foobar
Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.


console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined
If you want to customize the env variables prefix, see the envPrefix option.

