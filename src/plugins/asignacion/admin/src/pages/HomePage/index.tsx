/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import { CSSProperties } from "react";

import pluginId from "../../pluginId";

import Map from "../../components/Map/Map";
import EndSelection from "../../components/EndSelection/EndSelection";
import FeatureInfo from "../../components/FeatureInfo/FeatureInfo";

const ControlStyle:CSSProperties = {
  position: "absolute",
  zIndex: "10",
  margin: "0.5rem",
  padding: "1rem",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const HomePage = () => {
  return (
    <>
      <Map />
      <div style={ControlStyle}>
        <EndSelection />
      </div>
    </>
  );
};

export default HomePage;
