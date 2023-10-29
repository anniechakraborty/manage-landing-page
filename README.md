# Manage Landing Page

## About
This is project is part of my solution for the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). You can view my solution on the platform [here](https://www.frontendmentor.io/solutions/responsive-manage-landing-page-e4gl5TDxIg). Alternatively, I have hosted the project using GitHub Pages which can be viewed on the link [https://anniechakraborty.github.io/manage-landing-page/](https://anniechakraborty.github.io/manage-landing-page/).


## Set up steps followed by me

- Run `npm init` to initialize a package.json file and give it the necessary description and title. <br/>
- Run `npm install -D tailwindcss` to install tailwind as a dev dependency. <br/>
- Create a tailwind config file (tailwind.config.js) by running `npx tailwindcss init` <br/>
- Customise the config file as follows <br/>
` /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}` <br/>
In the content key we mention the files where we need to look for the tailwind classes `./<folder path name>/*.html` indicates to the CLI to look for all the HTML files in the specified folder / path. We can also define our own breakpoints and colours. <br/>
- Create an input CSS file with the tailwind directives `@tailwind base; @tailwind components; @tailwind utilities;`
You can also write your own custom CSS files here. The tailwind CLI watches this `input.css` file, compiles it and creates an output CSS file with the compiled CSS code. We include this output CSS file in our html. <br/>
- In `packages.json` update the scripts key with the following object:<br/>
`"scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
},` <br/>
Now everytime we run `npm run watch`, the compiler will watch `input.css` (our input file), compile it and write the output in `main.css` (our output file created in the css folder). Execute `npm run build` in production cases where we only need to run the script once to build our `main.css`.