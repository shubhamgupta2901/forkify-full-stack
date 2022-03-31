### forkify-full-stack

#### Note: This project is under development.

A full stack project to browse recipes. Backend is written using Node.js, web app using React and mobile apps using React Native. 



![](https://github.com/shubhamgupta2901/forkify/blob/master/screenshots/forkify-screenshot.png "")



Template for a fullstack javascript application, inspired by [this](https://github.com/atulmy/fullstack-javascript-architecture) repo. The folder structure is experimental and quite opinionated, but serves well for my purposes.


The overall idea is to provide a micro platform-as-a-service, using a system design like this:
![](https://github.com/shubhamgupta2901/create-fullstack-javascript-app/blob/master/fsja%20design.png)


### Stack of application:
* **Node.js** for the backend server
* **React** for the web application 
* **React Native** for Android and iOS app

### Folder Structure:
     fullstack-js-app
      ├── backend
      │   ├── api
      │   │   > NodeJS
      │   │   > PORT 8000
      │   │   > api.example.com
      │
      ├── frontend
      │   ├── mobile
      │   │   > React Native
      │   │   > iOS (Apple App Store)
      │   │   > Android (Google Play Store)
      |   |
      │   ├── mobile
      │   │   > React 
      │   │   > Single page application
      │
      └── README.md 
      
### Note
* This repo nests three git repos inside it, although the idea is to perform version control centrally from root folder, it does seem intutive to let each project have thier own .gitignore files.
* I was not able to create react application using facebook's ```create-react-app``` command. For some reason git was interpreting the folder as a submodule, and it didn't know where to fetch the submodule. So I had to manually configure webpack, babel and npm's package.json script. [Reference](https://dev.to/vish448/create-react-project-without-create-react-app-3goh)



