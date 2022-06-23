import React, { useEffect } from "react";
import { Tabs } from "antd";
import ApiKeys from "../components/ApiKeys";
import { connect, useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/userAction";
const { TabPane } = Tabs;

function Dashboard(props) {
  console.log(props)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  },[]);
  return (
    <div>
      <h1>You</h1>
      <ApiKeys keys ={props.apikeys}  />
    </div>
  );
}

const mapStateProps = (state) => {
    console.log('mpos',state)
    const {userData}  = state.user;
    return{apikeys: userData ? userData.apiKeys : []}; 
}

export default connect(mapStateProps)(Dashboard)
