# search-in-github
Cross platform : The goal is to create a simple API using express and a showcase mobile application using Expo (React Native).
You will have 2 distinct projects in the same repository: a server and a client.


#### **ON SERVER**

> Create an .env file and provide the information below :   
```
DATABASE_URL="postgresql://username:password@localhost:5432/searchGithub?schema=public"  
PORT=3000 
HOST=localhost  
GITHUB_USERNAME=github_username
PERSONAL_ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### You can test the following route : http://localhost/user/getuser/:username 
 ! IF IT EXISTS IN THE DATABASE, IF IT DOESN'T EXIST IN THE DATABASE IT IS SEARCHED USING THE GITHUB REST API
