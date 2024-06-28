# Lyra-ML-documentation

Hosted on https://big-hummingbird.github.io/documentation/

#### `main`

- Development branch

#### `gh-pages`

- Deployment branch that hosts the built static files.

DO NOT MANUALLY PUSH TO THIS BRANCH

## Build and Deploy

While in `main`, run `npm run deploy` to build onto `gh-pages` and automatically deploy.

## Local Preview

While in any development branch (e.g `main`), run `npm run serve` to run on a localhost (port default: 3000).


## Source File Structure


```plaintext
./
├── README.md
└── documentation/
    ├── src/
    │   ├─── pages/
    │   │   └── index.js      (the main default page that gets served: will probably remove)
    │   │
    │   └─── components/
    │       ├── cardLink.jsx  (a complete React component file)
    │       └── ...
    │
    └── docs/                 [ these are the individual pages that are present in the documentation sidebar ]
        ├─── intro.md                  (the default page that shows when opening documentation)
        ├─── get_started               (chapter1)
        │   ├── get_started_1.mdx        (page1)
        │   ├── get_started_2.md         (page2)
        │   └── _category_.json          (contains details like title and desc for this chapter)
        │
        ├─── on_workspaces
        │   ├── ...
        │   ├── ...
        │   └── _category_.json
        │ 
        ├─── ...
        ├─── ...
        └──── ...
```

#### On React Components

Doc files can be .md (pure markdown) or .mdx (support React components)

>  see [this page](./docs/get_started/get_started.mdx) to see an example of embedding React components in your pages

(Tailwind is supported!)
