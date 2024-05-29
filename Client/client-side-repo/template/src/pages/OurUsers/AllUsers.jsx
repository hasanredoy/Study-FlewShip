import axios from "axios";
import { useEffect, useState } from "react";
import { FaDeleteLeft, FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () =>
     { axios.get("https://crud-jwt-server-two.vercel.app/users")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        })},
    []
  );
  console.log(users);
  return (
    <div>
      <h1 className=" text-2xl lg:text-5xl text-center font-bold">
        Hi Welcome See Our All <span className=" text-yellow-400">Users</span>.
      </h1>
      <h2 className=" text-xl font-bold">Total Users: {users.length}</h2>
      <div className="overflow-x-auto rounded-t-xl my-10">
          <table className="table rounded-t-lg ">
            <thead className=" bg-sky-400 rounded-xl  rounded-t-2xl">
              <tr>
                <th></th>
                <th className=" text-xl font-bold text-white">Image</th>
                <th className=" text-xl font-bold text-white">Name</th>
                <th className=" text-xl font-bold text-white">Email</th>
                <th className=" text-xl font-bold text-white">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((singleUser, index) => (
                <tr key={singleUser._id}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td> <img className=" w-24" src={singleUser?.photo} alt="" /></td>
                  <td className=" text-xl font-medium">{singleUser?.name}</td>
                  <td>
                    <h2 className=" text-xl font-medium">{singleUser?.email}</h2>
                  </td>
                  <td>
                   <h4 className=" text-xl font-medium"> Student</h4>
                  </td>
                  <th>
                  
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default AllUsers;
