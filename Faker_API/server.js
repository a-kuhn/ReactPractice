const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name. lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        };
    }
}

// /api/companies/new ==> returns new User
app.post("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json({user: newUser});
});

// /api/companies/new ==> returns new Company
app.post("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json({company: newCompany});
});

// /api/user/company ==> returns new User and new Company
app.post("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({user: newUser, company: newCompany});
});

app.listen(port, ()=>console.log(`Listening on port: ${port}`));