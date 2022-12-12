import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUserId, getAllusers } from "../../../Redux/Reducer/Users";
import BlockIcon from "@mui/icons-material/Block";

// components

export default function UsersAdmin() {
  const user = useSelector((state) => state.users.allUsers);
  console.log("orders en users", user[0].Orders.length);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);
  function alertButtonDelete(e) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteUserId(e));
        window.location.reload();
        swal("Poof! Your product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });
  }

  if (useSelector((state) => !state.users.loading && state.users.error))
    return <h1>{error}</h1>;
  return (
    <>
      <h3 className="pt-40 pb-10 text-2xl font-bold tracking-wide ">Users</h3>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1"></div>
            {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div> */}
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Profile image
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  User Name
                </th>

                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Privileges(ADM)
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Banned
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  phoneNumber
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(user) ? (
                user.map((element) => {
                  return (
                    <tr key={element.id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        <img
                          src={element.profileImage}
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>{" "}
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {element.first_name} {element.last_name} (ID:{" "}
                        {element.id})
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.email}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.isAdmin ? "yes" : "no"}
                      </td>
                      {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.phoneNumber}
                      </td> */}
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.isBanned ? "yes" : "No"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.phoneNumber}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {element.address}
                      </td>
                      {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button>Ban user</button>
                      </td> */}
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                        <button
                          value={element.id}
                          type="submit"
                          onClick={() => {
                            {
                              alertButtonDelete(element.id);
                            }
                          }}
                        >
                          <div>
                            <a className="decoration-red-500 mr-2 text-rose-600">
                              Ban
                            </a>
                            <BlockIcon color="warning" />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {user.first_name}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.isAdmin ? "true" : "false"}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.isBanned ? "true" : "false"}
                  </td>
                  {user.isBanned ? (
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <Button>UnBan</Button>
                    </td>
                  ) : (
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button>Ban</button>
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
