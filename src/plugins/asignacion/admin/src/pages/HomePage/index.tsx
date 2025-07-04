/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import { CSSProperties } from "react";

import pluginId from "../../pluginId";

import Map from "../../components/Map/Map";
import EndSelectionButton from "../../components/Selection/EndSelectionButton";
import ClearSelectionButton from "../../components/Selection/ClearSelectionButton";
import FeatureInfo from "../../components/FeatureInfo/FeatureInfo";

import { useControlKeyListener } from "../../hooks/useControlKeyListener";

const ControlStyle: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  padding: "0.7rem",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const HomePage = () => {
  useControlKeyListener();
  return (
    <>
      <Map />
      <div style={ControlStyle}>
        <EndSelectionButton />
        <ClearSelectionButton />
      </div>
    </>
  );
};

export default HomePage;
