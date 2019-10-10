import React from "react";
import axios from "axios";
// import { writeFileSync, readFileSync } from "fs";

export default function AddTransactions({ getAllTransactions }) {
  const handleSubmit = filePath => {
    let read = new FileReader();
    read.readAsText(filePath);
    read.onloadend = data => {
      const csv = data.target.result;
      const sendCsv = {
        csv: csv
      };
      axios
        .post("/transactions/file", sendCsv)
        .then(() => {
          getAllTransactions();
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(file.files[0]);
        }}
        method="post"
        encType="multipart/form-data"
      >
        <div>
          <div>
            <label htmlFor="file">ADD TRANSACTIONS FILE</label>
          </div>
          <input type="file" id="file" name="file" multiple></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
