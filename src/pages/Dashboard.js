import { Spin } from "antd";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ApiKeys from "../components/ApiKeys";
import AvailableApis from "../components/AvailableApis";
import { Navbar } from "../components/Navbar";
import Profile from "../components/Profile";
import { fetchUser } from "../redux/actions/userAction";

function Dashboard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser()); // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar active_path="/dashboard" />
      <div className="w-full max-w-6xl ml-auto mr-auto mt-10 dashboard">
        <div className="flex justify-between p-20 bg-white rounded-md profile-keys">
          {props.userData.email ? (
            <>
              <ApiKeys keys={props.apikeys} />
              <Profile userData={props.userData} />
            </>
          ) : (
            // <h2></h2>
            <Spin />
          )}
        </div>
        <AvailableApis />
      </div>
    </>
  );
}

const mapStateProps = (state) => {
  const { userData } = state.user;
  return {
    apikeys: userData ? userData.apiKeys : [],
    userData: userData ? userData : {},
  };
};

export default connect(mapStateProps)(Dashboard);
