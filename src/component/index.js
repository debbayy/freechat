import React, { useState } from "react";

const Index = () => {
  return (
    <>
      <div
        className="d-flex bg-light container-fluit w-100"
        style={{ height: "100vh" }}
      >
        <div className="d-flex row align-items-center col-6  ">
          <div className="px-5 mx-5 px-5">
            <h1 className="row text-start mx-3 text-primary">freechat</h1>
            <h3 className="row text-start mx-3">
              Freechat helps you connect and share with the people in your life.
            </h3>
          </div>
        </div>

        <div className="d-flex col-6 justify-content-center container-fluid">
          <div className="d-flex row w-50 align-items-center">
            <div
              className="bg-white my-5 pb-3"
              style={{
                borderRadius: 10,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <input
                type="text"
                className="form-control my-3 size-lg"
                placeholder="Email address or phone number"
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />
              <a style={{ textDecoration: "none" }} href="">
                Forgotten password?
              </a>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="button">
                  Log In
                </button>
              </div>
              <hr />
              <button className="btn btn-success" type="button">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
