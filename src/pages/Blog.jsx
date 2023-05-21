import React, {useEffect} from "react";

const Blog = () => {
  useEffect(() => {
    document.title = `Funfinity|Blog`;
  }, []);
  return (
    <div className="max-w-6xl mx-auto bg-sky-200 p-6 mt-20">
      <h1 className="text-2xl my-4 font-semibold">
        {" "}
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>
      <p>
        An access token is string that is used to authenticate client so that
        can give valid authorized materials.It is used for protection of the
        resources. This token has a specific lifespan after which it expires.{" "}
        <br />
        <br />
        Refresh tokens are the credential client uses to get new access token
        without re-authenticating the users. It is used to maintain session and
        to get new Access token. And if Refresh token expires then the user
        needs to re-authenticate to get another one.
        <br />
        <br />
        Access token can be stored in local storage or http-only Cookies.
        <br />
        Refresh token can be securely stored in the memory or in brower cookie.
      </p>

      <h1 className="text-2xl my-4 font-semibold">
        Compare SQL and NoSQL databases?
      </h1>
      <p>
        SQL databases are Relational Database.They have predefined schema.
        <br />
        They are more useful for complex queries.
        <br /> They are not good for storing hierarchical data.
        <br />
        They are vertically scalable
        <br />
        <br />
        NoSQL databases are Non-relational Database. <br />
        They do not have predefined schema. <br />
        They are good for storing hierarchical data.
        <br /> But are not good for complex queries. <br />
        They are horizontally scalable
      </p>

      <h1 className="text-2xl my-4 font-sembold">
        What is express js? What is Nest JS
      </h1>
      <p>
        Express Js is a web application framework for node js.It is a light
        framework that provides middlewares for HTTP request and response.It is
        can be used to define routes.
        <br />
        <br />
        Nest Js is an open source framework that is used to build server-side
        application.It is used to build scalable and efficient applications. It
        provides vast range of APIs, function and libraries helping to write
        cleaner and few lines of code.It is built on typeScipt and uses
        progressive JavaScipt and has 3 main components, controller, provider
        and module
      </p>

      <h1 className="text-2xl my-4 font-sembold">
        What is MongoDB aggregate and how does it work?
      </h1>
      <p>
        MongoDB Aggregate is a process of performing operations on a large
        collection of data by passing them through different stages. These
        stages are called pipeline.In this pipeline the data goes through
        different operations such as find, sort,modify etc.Each stage in the
        pipeline takes previous stage output as it's input and performs the
        operations
      </p>
    </div>
  );
};

export default Blog;
