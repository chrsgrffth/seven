module.exports = {
  paths: {
    public: '_site',
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
      'decent': 'decent-scss/modules/all'
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

