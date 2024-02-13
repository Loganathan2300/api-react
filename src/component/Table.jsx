import { Icon } from "@iconify/react";
import React from "react";

const Table = ({data,header }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table class="table">
            <thead>
              <tr>
            {header.map((item,i) => (
                  <th key={i}>
                       <th>{item}</th> 
                    </th>
              ))}
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item,i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                  <td className="d-flex m-1">
                    <button><Icon icon="typcn:eye-outline" /></button>
                    <button><Icon icon="fluent:edit-28-regular" /></button>
                    <button><Icon icon="mdi-light:delete" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
