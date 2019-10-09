import React from "react";

export default function AddTransactions() {
  const handleSubmit = event => {
    event.preventDefault();
    console.log("check event target", event.target.value);
    var file = document.getElementById("file");
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/transactions/file");
    request.setRequestHeader("content-type", "application/json");
    request.send({
      file: file
    });
  };
  return (
    <div>
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
        method="post"
        encType="multipart/form-data"
      >
        <div>
          <div>
            <label htmlFor="file">Choose file to upload</label>
          </div>
          <input type="file" id="file" name="file" multiple></input>
        </div>
        <div>
          <button
          // onSubmit={event => {
          //   handleSubmit;
          // }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
