# svelte-like-app 
![like-app](https://user-images.githubusercontent.com/22463540/112006263-e9c72680-8b66-11eb-92c1-9dd5b47a237b.png )

Mini project / Using svelte / Just like-button and Add to Mylist / No saving, window storage or something

# Netlify Result 
https://upbeat-payne-8ccdef.netlify.app

# icons
All svg from flaticon

# Using Svelte & Snowpack template

```bash
## Install template
$ npx degit ParkYoungWoong/svelte-snowpack-template DIR_NAME

## Change directory
$ cd DIR_NAME

## Install dependencies
$ npm i

## Start dev server
$ npm run dev
```

- Svelte
- Snowpack
- TypeScript
- SCSS
- Autoprefixer/PostCSS
- Web test runner
- Chai
- Reset.css

# Using Typescript Issue

Cannot find module './App.svelte' or its corresponding type declarations

1. Install @tsconfig/svelte
npm i --save-dev @tsconfig/svelte

2. Add this tsconfig as the base config file in your tsconfig.json
{
  "extends": "@tsconfig/svelte/tsconfig.json",
}

property 'hot' does not exist on type 'importmeta'.ts(2339)

1. Add this in your types/static.d.ts

interface ImportMeta {
  // TODO: Import the exact .d.ts files from "esm-hmr"
  // https://github.com/pikapkg/esm-hmr
  hot: any;
}
