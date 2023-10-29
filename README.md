# Manage Landing Page

## About
This is project is part of my solution for the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). You can view my solution on the platform [here](https://www.frontendmentor.io/solutions/responsive-manage-landing-page-e4gl5TDxIg). Alternatively, I have hosted the project using GitHub Pages which can be viewed on the link [https://anniechakraborty.github.io/manage-landing-page/](https://anniechakraborty.github.io/manage-landing-page/).


## Set up steps followed by me

- Run `npm init` to initialize a package.json file and give it the necessary description and title. <br/>
- Run `npm install -D tailwindcss` to install tailwind as a dev dependency. <br/>
- Create a tailwind config file (tailwind.config.js) by running `npx tailwindcss init` <br/>
- Customise the config file as follows <br/>
` /** @type {import('tailwindcss').Config} */ <br/>
module.exports = { <br/>
  content: ['./*.html'], <br/>
  theme: { <br/>
    screens: { <br/>
      sm: '480px', <br/>
      md: '768px', <br/>
      lg: '976px', <br/>
      xl: '1440px', <br/>
    }, <br/>
    extend: { <br/>
      colors: { <br/>
        brightRed: 'hsl(12, 88%, 59%)',<br/>
        brightRedLight: 'hsl(12, 88%, 69%)',<br/>
        brightRedSupLight: 'hsl(12, 88%, 95%)',<br/>
        darkBlue: 'hsl(228, 39%, 23%)',<br/>
        darkGrayishBlue: 'hsl(227, 12%, 61%)',<br/>
        veryDarkBlue: 'hsl(233, 12%, 13%)',<br/>
        veryPaleRed: 'hsl(13, 100%, 96%)',<br/>
        veryLightGray: 'hsl(0, 0%, 98%)',<br/>
      },<br/>
    },<br/>
  },<br/>
  plugins: [],<br/>
}` <br/>
In the content key we mention the files where we need to look for the tailwind classes `./<folder path name>/*.html` indicates to the CLI to look for all the HTML files in the specified folder / path. We can also define our own breakpoints and colours. <br/>
- Create an input CSS file with the tailwind directives <br/>
`@tailwind base; <br/> 
@tailwind components; <br/> 
@tailwind utilities;` <br/>
You can also write your own custom CSS files here. The tailwind CLI watches this `input.css` file, compiles it and creates an output CSS file with the compiled CSS code. We include this output CSS file in our html. <br/>
- In `packages.json` update the scripts key with the following object:<br/>
`"scripts": { <br/>
    "build": "tailwindcss -i ./input.css -o ./css/main.css", <br/>
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch" <br/>
},` <br/>
Now everytime we run `npm run watch`, the compiler will watch `input.css` (our input file), compile it and write the output in `main.css` (our output file created in the css folder). Execute `npm run build` in production cases where we only need to run the script once to build our `main.css`.