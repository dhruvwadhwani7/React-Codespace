using od contexts so making all the context and importing them in the context folder 

TodoContext.js files has this all 
1) createContext create krte ho - TodoContext
---- defaultvalues and methods inside the {} - object 
2) for no using TodoContext.Provide again and again we save that also inside a variable for erapping it up 
3) cusotm hook banaya for using context through useContext in any other file  - useTodo



Then you designs fucntionilty in the App.jsx 

after compleetion of the methods definition 



suppose already there are few todos list that makes up in the list 
and we have to store that in the local storage and get them as soon the page loads 
we use the concept of the localStorage

by using useEffect hook we establish that when th epgae loads the list of todo in the local storage gets into the todos array 


when you set the item the. after that if there is any change in the todos array then the todo should be saved in the array fo the local storage 
this can be done by using useEffect 