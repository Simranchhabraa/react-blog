import React, { useState } from "react";
function Form() {
  React.useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [create, setCreate] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(-1);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`,`Description: ${description}`,`Create: ${create}`);
    const newBlog = {name,description, create,};
    const newBlogs = [...blogs];
    if (index === -1) {
      newBlogs.push(newBlog);
    } else {
      newBlogs[index] = newBlog;
      setIndex(-1);
    }
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setName("");
    setDescription("");
    setCreate("");
    // localStorage.setItem('Name',name)
    // localStorage.setItem('Desc',desc)
    // localStorage.setItem('Create',create)
  };
  const handleEditBlog = (index) => {
    const blog = blogs[index];
    setName(blog.name);
    setDescription(blog.description);
    setCreate(blog.create);
    setIndex(index);
  };
  const handleRemoveBlog = (index) => {
    const newBlogs = [...blogs];
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };
  return (
    <div className="conteiner">
      <div>
        <h1>Create New Blog</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Your Name"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter Description"
          />
        </label>
        <br />
        <label>
          Create by:
          <input
            type="text"
            value={create}
            onChange={(event) => setCreate(event.target.value)}
            placeholder="Enter Name"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h1>Blog Data:</h1>
          <p>{blog.name}</p>
          <p>{blog.description}</p>
          <p>{blog.create}</p>
          <button onClick={() => handleEditBlog(index)}>Edit</button>
          <button onClick={() => handleRemoveBlog(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default Form;