/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import { CSSProperties } from "react";

import { DesignSystemProvider } from "@strapi/design-system";

import pluginId from "../../pluginId";

import Map from "../../components/Map/Map";
import EndSelection from "../../components/Selection/EndSelection";
import ClearSelection from "../../components/Selection/ClearSelection";
import FeatureInfo from "../../components/FeatureInfo/FeatureInfo";

import { useControlKeyListener } from "../../hooks/useControlKeyListener";

const ControlStyle: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  margin: "0.5rem",
  padding: "1rem",
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
        <EndSelection />
        <ClearSelection />
      </div>
    </>
  );
};

export default HomePage;
