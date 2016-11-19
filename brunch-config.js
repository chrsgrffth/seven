module.exports = {
  paths: {
    watched: ['source']
  },

  files: {
    javascripts: {
      joinTo: 'js/main.js',
      autoRequire: {
        'js/main.js': ['./js/initialize']
      }
    },
    stylesheets: {
      sourceFiles: ['init.scss'],
      joinTo: 'css/main.css'
    }
  },

  server: {
    port: 4000,
    command: 'jekyll serve'
  },

  npm: {
    aliases: {
      'decent': 'decent-scss/modules/all',
      'vue': 'vue/dist/vue.js'
    },

    globals: {
      'TweenLite': 'gsap/src/uncompressed/TweenLite',
      'TweenMax': 'gsap/src/uncompressed/TweenMax'
    }
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },
    sass: {
      mode: ''
    }
  }
}

