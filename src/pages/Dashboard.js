import React, { useEffect } from "react";
import ApiKeys from "../components/ApiKeys";
import { connect, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/userAction";
import { Navbar } from "../components/Navbar";
import Profile from "../components/Profile";
import AvailableApis from "../components/AvailableApis";

function Dashboard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <Navbar active_path="/dashboard" />
      <div className="w-full max-w-6xl ml-auto mr-auto mt-10 dashboard">
        {props.userData.email ? (
          <div className="flex justify-between p-20 bg-white rounded-md profile-keys">
            <ApiKeys keys={props.apikeys} />
            <Profile userData={props.userData}/>
          </div>
        ) : (
          <h2>Loading............</h2>
        )}
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
