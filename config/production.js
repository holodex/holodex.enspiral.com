module.exports = {
  url: {
    protocol: 'http',
    hostname: 'holodex.enspiral.com',
    port: process.env.PORT
  },
  data: {
    gitRepoUrl: 'git://github.com/holodex/enspiral-data.git',
    localDir: __dirname + '/../data',
    branch: 'csv',
    cronSpec: '*/15 * * * *'
  }
}
