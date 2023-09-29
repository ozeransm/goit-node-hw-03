const mongoose = require('mongoose');
require('dotenv').config();
const singin = require('./singin');
const { getMockReq, getMockRes } = require('@jest-mock/express');

  beforeEach(() => {
     (async ()=>{
        const {DB_HOST} = process.env;
        
        mongoose.connect(DB_HOST)
          .then(async() => {
            console.log("Database connected");
    
          });
    })();
    
  });
    
  afterAll(() => {
    mongoose.disconnect();
  });

test('Answer status-code 200', async ()=>{
        const req = getMockReq({ body: {email: "rout@mail.com", password: "123461"}})
        const { res, next } = getMockReq({res:{status: (data)=>res.status=data, json: (data)=>res.json=data}})
        
        const data = await singin(req, res, next);
        
        expect(res.status).toBe(200)
     
})

test('Answer have token', async ()=>{
  const req = getMockReq({ body: {email: "rout@mail.com", password: "123461"}})
  const { res, next } = getMockReq({res:{status: (data)=>res.status=data, json: (data)=>res.json=data}})
  
  const data = await singin(req, res, next);
  
  expect(res.json.token).toBe(
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE1ZDRjMGJkYzBjYjNjMzBhNTU5M2MiLCJpYXQiOjE2OTU5Mjk1MzYsImV4cCI6MTY5NjAxNTkzNn0.vPJ7iAk1UnQ4UaX_P3r3VPxIejcAJr3IQpzfMD7ctqc",
  )

})

test('Answer is objecs user with fields email, subscription and type string', async ()=>{
  const req = getMockReq({ body: {email: "rout@mail.com", password: "123461"}})
  const { res, next } = getMockReq({res:{status: (data)=>res.status=data, json: (data)=>res.json=data}})
  
  await singin(req, res, next);
  
    if (typeof res.json.user.subscription !== "string") throw new Error("Type of field subscription mistmath")

    expect(res.json.user).toEqual({
    email: "rout@mail.com",
    subscription: "starter"
  })
})