import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

// import { writeFileSync, readFileSync } from "fs";

export default function AddTransactions({ getAllTransactions, getAllCategories }) {
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
          getAllCategories();
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
        className="addfile"
      >
        <div>
          <label htmlFor="file">ADD TRANSACTIONS FILE</label>
          <input type="file" id="file" name="file" multiple></input>
        </div>
        <div>
          <button variant="contained" size="small" color="default">
            Submit
          </button>
          <br />
        </div>
      </form>
    </div>
  );
}
