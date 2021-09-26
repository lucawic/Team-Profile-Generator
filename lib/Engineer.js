const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }
    //override the employee's getRole() method
    getRole() {
        return this.role = 'Engineer';
      }
    
    }
    
    module.exports = Engineer;
  
  
  
  /*  getSchool()
    {
        return this.github;
    }
    getRole()
    {
        return "Engineer"
    }
    getRoleHTML(){
        return `<li>Github: <a href="https://github.com/${this.github()}">${this.getGithub()}</a></li>`
    }
}

module.exports = Engineer; */