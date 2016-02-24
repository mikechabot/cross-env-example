# cross-env-example
Reproduction of https://github.com/kentcdodds/cross-env/issues/13

# Details
1. git clone git@github.com:mikechabot/cross-env-example.git
2. `npm install`

# Scripts

| Script  | Description | Works as expected? |
| ------------- | ------------- | ------------- |
| `start-dev-set`  | Uses `SET` for setting `NODE_ENV` to dev  | Yes |
| `start-prod-set` | Uses `SET` for setting `NODE_ENV` to production  | Yes |
| `start-dev-cross` | Uses `cross-env` for setting `NODE_ENV` to dev  | Yes |
| `start-prod-cross` | Uses `cross-env` for setting `NODE_ENV` to production  | Yes |
| `start-dev-cross-webpack` | Uses `cross-env` for setting `NODE_ENV` to dev, builds with webpack  | **No** |
| `start-dev-cross-webpack` | Uses `cross-env` for setting `NODE_ENV` to production, builds with webpack  | **No** |

# Examples

## Working example, using `start-dev-set`:

        mchabot@XG01484 MINGW64 /c/_workspaces/cross-env-example
        $ npm run start-dev-set
        
        > cross-env-example@1.0.0 start-dev-set C:\_workspaces\cross-env-example
        > set NODE_ENV=dev&& webpack --config webpack.config.js && node server.js
        
        Hash: bbca8417fe228733dd70
        Version: webpack 1.12.14
        Time: 1607ms
             Asset       Size  Chunks             Chunk Names
         bundle.js       1 MB       0  [emitted]  main
        index.html  323 bytes          [emitted]
           [0] multi main 52 bytes {0} [built]
            + 247 hidden modules
        * * *
        * * * Running in dev mode
        * * *
        Listening at localhost:3040

# Non-Working example, using `start-dev-cross-webpack`:

        mchabot@XG01484 MINGW64 /c/_workspaces/cross-env-example
        $ npm run start-dev-cross-webpack
        
        > cross-env-example@1.0.0 start-dev-cross-webpack C:\_workspaces\cross-env-example
        > cross-env NODE_ENV=production webpack --config webpack.production.config.js && node server.js
        
        Hash: 0e3abc02723234b01496
        Version: webpack 1.12.14
        Time: 1298ms
             Asset       Size  Chunks             Chunk Names
         bundle.js     680 kB       0  [emitted]  main
        index.html  323 bytes          [emitted]
            + 160 hidden modules
        * * *
        * * * Running in undefined mode
        * * *
        Listening at localhost:3040
