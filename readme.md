# Introduction
Welcome to my personal project! That's pleasure to me welcome all of you here. So **todoist copy**,
is nothing more than just [PBL](https://www.pblworks.org/what-is-pbl). Project is based on [Todoist](https://todoist.com/).
This awesome tool, allows to manage your tasks, daily activities etc.

## Used technologies
To be able to create this project, I've told myself "I will seperate business logic from client's layout.". 
So, to able to that, project has been fully written with JavaScript/Typescript language.

First of all why I decided to use Typescript instead of pure "Vanilla" JavaScript, is because
in of using pure Javascript, you are well partially unable to create well-working IOC, SOLID pattern / principles.

Second of all, I'm going to use ReactJS (Rest in peace [4 now] my good friend Vue). And I have to admit, that
I hate writing software without knowing in which type is some variable.

So, in shortly used technologies are as follows.

### Backend
- Inversify (with express utils)
- MySQL
- CORS
- Helmet
- Winston
- Morgan
- Node v16
- Docker (only for phpmyadmin and mysql setup. For now. We will see if I'm going to create an image of this project)
- Multer (for files managment)
- Typescript

### Frontend
- ReactJS v18
- Redux
- Tailwindcss
- Typescript
- Storybook

### Modules bundling
- Webpack

### Testing libraries
- Jest

## How to start?
To start this project, you have to (Assuming that you've already run ```bash
npm install
``` in every folder **server** and **layout**), go to server folder, and run

```bash
npm run dev:serve
```

and do the same in layout folder. Please have in mind, that you don't have any database connection, so there's highly possible, that you are going to encounter errors.
To fix it, you have two options.

1) Manually create each of tables in your database
2) Or, you basicly could use prepared by @me ``squizze`` CLI. You can find him in backend directory. This app is fully written in JavaScript.

# Want to contribute?
null - for now

# Find me on
- [Facebook](https://www.facebook.com/bartosz.pazdur.1/)
- [Github](https://github.com/BrittleHeart)
- [Linkedin](https://linkedin.com/in/b-pazdur)
- [Goodreads](https://www.goodreads.com/user/show/138188568-bartosz-pazdur)