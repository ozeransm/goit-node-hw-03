const mongoose = require('mongoose');
require('dotenv').config();
const singin = require('./singin');
const { getMockReq, getMockRes } = require('@jest-mock/express');

const req = getMockReq({ body: {email: "rout@mail.com", password: "123461"}})
const { res, next } = getMockRes({res:{status: (data)=>data, json: (data)=>data}})

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

test('Answer have status-code 200', async ()=>{
  await singin(req, res, next);
  expect(res.status).toHaveBeenCalledWith(200)
    
})

test('Answer have token', async ()=>{
  await singin(req, res, next);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE1ZDRjMGJkYzBjYjNjMzBhNTU5M2MiLCJpYXQiOjE2OTU5Mjk1MzYsImV4cCI6MTY5NjAxNTkzNn0.vPJ7iAk1UnQ4UaX_P3r3VPxIejcAJr3IQpzfMD7ctqc", 

  }), 
  )
  

})

test('Answer is objecs user with fields email, subscription and type string', async ()=>{
   await singin(req, res, next);
    // if (typeof res.json.user.subscription !== "string") throw new Error("Type of field of subscription mistmath")
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        user: {email: "rout@mail.com", 
        subscription: "starter"}}), 
    )
  
})