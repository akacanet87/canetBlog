const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    BASE_URL: 'https://akacanet87.github.io/',
    WEATHER_API: process.env.NODE_ENV !== 'production' ? 'https://api.openweathermap.org/data/2.5/weather' : 'https://api.openweathermap.org/data/2.5/weather',
    WEATHER_API_KEY: '804de7dba2a537f192c03fa901e20a7b',
  },
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Canet Portfolio',
    titleTemplate: `%s ㅣ Canet's Blog`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'm7tSlZTC-_fm4wwskeVVgwQRMdpfWJNJk7zZWJFfUeo',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '웹프론트엔드,웹개발자,개발자,프론트엔드,Frontend,Developer,Programmer,박지호,akacanet,akacanet87,canet,ParkJiho,Vue.js,Nuxt.js,React.js,Next.js',
      },
      {
        hid: 'description',
        name: 'description',
        content: `웹프론트엔드 개발자 Canet의 블로그입니다! Vue.js 위주로 개발하였고 React.js와 Angular.js 도 다뤄봤습니다. 긍정낙천의 아이콘이며 분위기메이커! 취미도 다양해서 여러가지로 즐거운 Canet입니다!`,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:keyword',
        property: 'og:keyword',
        content: '웹프론트엔드,웹개발자,개발자,프론트엔드,Frontend,Developer,Programmer,박지호,akacanet,akacanet87,canet,ParkJiho,Vue.js,Nuxt.js,React.js,Next.js',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `웹프론트엔드 개발자 Canet의 블로그입니다! Vue.js 위주로 개발하였고 React.js와 Angular.js 도 다뤄봤습니다. 긍정낙천의 아이콘이며 분위기메이커! 취미도 다양해서 여러가지로 즐거운 Canet입니다!`,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: (process.env.NODE_ENV !== 'production')
          ? 'https://akacanet87.github.io/'
          : 'https://akacanet87.github.io/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: (process.env.NODE_ENV !== 'production')
          ? 'https://akacanet87.github.io/logo-canet-primary.png'
          : 'https://akacanet87.github.io/logo-canet-primary.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '800',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '400',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        name: 'twitter:image',
        content: (process.env.NODE_ENV !== 'production')
          ? 'https://akacanet87.github.io/logo-canet-primary.png'
          : 'https://akacanet87.github.io/logo-canet-primary.png',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      {
        'http-equiv': 'pragma',
        content: 'no-cache',
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        'http-equiv': 'cache-control',
        name: 'cache-control',
        content: 'no-cache',
      },
      {
        'http-equiv': 'expires',
        content: '0',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900&amp;subset=korea|Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,200,300,400,500,600,700,800,900&amp;subset=korean',
      },
    ],
    script: [
      { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/common/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/common.scss',
    // '~/assets/style/theme.styl',
    'slick-carousel/slick/slick.scss',
    'slick-carousel/slick/slick-theme.scss',
    'aos/dist/aos.css',
  ],
  styleResources: {
    scss: [
      '@/assets/styles/variables.scss',
      // '@/assets/styles/common.scss',
    ],
  },
  optimizedImages: {
    optimizeImages: true,
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/filters/numberFilter',
    '~/plugins/filters/stringFilter',
    '~/plugins/filters/imageFilter',
    '~/plugins/filters/etcFilter',
    {
      src: '~/plugins/polyfills',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/slick',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/googleMap',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/calendarpicker',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/prlx',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/aos',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/deviceDetector',
      ssr: false,
      mode: 'client',
    },
    {
      src: '~/plugins/kakao',
      ssr: false,
      mode: 'client',
    },
    // '@/plugins/sw',
  ],
  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false,
  },
  dayjs: {
    defaultLocale: 'ko',
  },
  resolve: {
    baseUrl: './',
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname),
    },
    extensions: [
      '',
      '.js',
      '.vue',
      '.json',
      '.scss',
    ],
  },
  // generate: {
  //   minify: {
  //     collapseWhitespace: false,
  //     removeComments: true,
  //   },
  // },

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dayjs',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'nuxt-user-agent',
    [
      'cookie-universal-nuxt',
      { alias: 'cookies' },
    ],
  ],

  /*
  ** Build configuration
  */
  build: {
    entry: [
      'event-source-polyfill',
    ],
    babel: {
      presets: ({ isServer }) => {
        return [
          ['@babel/preset-env'],
        ]
      },
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
    },
    filenames: {
      app: ({ isDev }) => isDev
        ? '[name].[hash].js'
        : '[chunkhash].js',
      chunk: ({ isDev }) => isDev
        ? '[name].[hash].js'
        : '[chunkhash].js',
      css: ({ isDev }) => isDev
        ? '[name].[hash].css'
        : '[chunkhash].css',
    },
    terser: {
      cache: false,
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          // drop_console: false,
        },
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxSize: 51200,
        // cacheGroups: {
        //   styles: {
        //     name: 'styles',
        //     test: /\.(scss|vue)$/,
        //     chunks: 'all',
        //     enforce: true,
        //   },
        // },
      },
    },
    // transpile: ['vuetify/lib'],
    // plugins: [new VuetifyLoaderPlugin()],
    // loaders: {
    //   stylus: {
    //     import: ['~assets/style/variables.styl'],
    //   },
    // },

    loaders: {
      vue: {
        prettify: false,
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          // nodeExternals({
          //   allowlist: [/^slick-carousel/, /^vue-slick/, /^vue-datepicker-local/, /^vue2-google-maps/],
          // }),
        ]
      }
      if (ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: process.env.NODE_ENV === 'production'
                ? path.posix.join('./', 'media/[name].[hash:7].[ext]')
                : path.posix.join('./', 'media/[name].[hash:7].[ext]'),
            },
          },
          {
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        )
      }
    },
  },
  router: {
    mode: 'history',
    base: process.env.NODE_ENV === 'development' ? '/' : '/akacanet87.github.io/',
    middleware: 'checkPage',
  },
  vue: {
    config: {
      productionTip: false,
      devtools: process.env.NODE_ENV !== 'production',
    },
  },
}
