
# Mandlac Assignment
Assignment for the Interview Process

There are two repos one for backend and frontend
backend: current repo you are viewing.
frontend: https://github.com/vansh123456/mand-fe



## Installation

Following are the instructions to deploy on local machine

Clone both the frontend and Backend Repos(into common folder)

```
cd server
npm install
touch .env
cat .env 
npx ts-node server.ts
```
The ENV file for the Backend has following Key-Value pairs
```
DATABASE_URL=
PORT=
```

You can find their values in the notion document

Clone Frontend repo into client foler in the common folder of choice

```
cd client
npm install
npm run dev
```




 
    
## Deployed Links

WAIT 2-3 MINS AFTER OPENING FRONTEND FOR BACKEND TO RESPOND
RENDER IS PAID AND I DONT HAVE MONIES TO AFFORD PREMIUM(MAYBE GIVE ME INTERNSHIP?)

```
Deployed link: https://mand-fe.vercel.app/
Backend Deployed Link: https://mandlac-assignment.onrender.com/
```


## Tech Decisions

## Model Type of Architecture
I have decided to go with modular Monolith with less couple-ability 

I have choosen MVC Architecture to design this application

### Database 
Decided to go with POSTGRES hosted on NEONdb (i aint hosting postgres locally)

used Prisma cause why not and why write your own SQL when prisma can Do(i know SQL tho)

### Microservices

we can go forward with microservices for different requirements like AUTH,user sessions and the ML services

### TypeScript

type safe coz why not,and you wouldnt accept js right,coz anyone can write js backend lol


## If I had more time

### Frontend

Beautify it even more

Add the sequence player to it too

Improve 'resolve' button design

### Backend

Add user Auth

Oauth2

Implement middleware(that too in user logins)

switch to microservices,coz yes we scalin up baby!

AND AND rebase it from the ground up because i forgot to git init in the base repo and now i have to add submodules in one repo to link up 2 repositories(mistakes happen,sorry)
