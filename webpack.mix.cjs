const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react()
   .sass('resources/sass/app.scss', 'public/css')
   .sourceMaps()
   .options({
      esbuild: {
         loader: 'jsx' // Set the loader to 'jsx' for parsing JSX
      },
      resolve: {
         extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
      },
      module: {
         rules: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               use: {
                  loader: 'esbuild-loader',
                  options: {
                     loader: 'jsx'
                  }
               }
            },
            {
               test: /\.mp4$/,
               use: 'file-loader',
            },
         ]
      },
   })
   .js('resources/js/manage.js', 'public/js')
   .js('resources/js/review.js', 'public/js')
   .js('resources/js/detail.js', 'public/js');
