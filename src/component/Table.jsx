import { Icon } from "@iconify/react";
import React from "react";

const Table = ({ data, header,show }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table class="table table-responsive">
            <thead className="text-center">
              <tr>
                <th>Edit</th>
                {header.map((item, i) => (
                  <th key={i}>
                    <th>{item}</th>
                  </th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td><button><Icon icon="fluent:edit-28-regular" /></button></td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                  <td className="d-flex p-5">
                   {show&& <button className="m-1" >
                      <Icon icon="typcn:eye-outline" />
                    </button>}
                    {/* <button className="m-1">
                      <Icon icon="fluent:edit-28-regular" />
                    </button> */}
                    <button className="m-1">
                      <Icon icon="mdi-light:delete" />
                    </button>
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
