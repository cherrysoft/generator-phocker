var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'title',
      message : 'Your project title',
      default : this.appname
    },{
      type    : 'input',
      name    : 'dbHost',
      message : 'Your DB Host',
      default : '127.0.0.1'
    },{
      type    : 'input',
      name    : 'dbPort',
      message : 'Your DB Port',
      default : '3306'
    },{
      type    : 'input',
      name    : 'appPort',
      message : 'Your App Port',
      default : '8080'
    }]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('docker-compose.yml'),
      {
        title: this.answers.title,
        dbPort: this.answers.dbPort,
        dbHost: this.answers.dbHost,
        appPort: this.answers.appPort,
      }
    );

    this.fs.copyTpl(
      this.templatePath('app.dockerfile'),
      this.destinationPath('app.dockerfile'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('web.dockerfile'),
      this.destinationPath('web.dockerfile'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('vhost.conf'),
      this.destinationPath('vhost.conf'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('build.sh'),
      this.destinationPath('build.sh'),
      {}
    );
  }

};
