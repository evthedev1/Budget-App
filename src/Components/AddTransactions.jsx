import React from "react";
import axios from "axios";
// import { writeFileSync, readFileSync } from "fs";

export default function AddTransactions() {
  const handleSubmit = filePath => {
    // console.log(e.target.value);
    // console.log("file here", filePath);

    let read = new FileReader();
    read.readAsText(filePath);
    read.onloadend = data => {
      const csv = data.target.result;
      const sendCsv = {
        csv: csv
      };
      axios.post("/transactions/file", sendCsv, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("upload successful");
        }
      });
    };
  };
  return (
    <div className="txn-row">
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
            <label htmlFor="file">Choose file to upload</label>
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
