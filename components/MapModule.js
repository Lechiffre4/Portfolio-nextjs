import React from "react";
import { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { Box, Button } from "@chakra-ui/react";

export default function MapModule() {
  const colorSchool = "#F5F94D";
  const colorWork = "#4DAEF9"
  const colorCurrent = "lightgreen"

    return (
      <>
       <Map height={400} w={300} defaultCenter={[44.607566667292474, -41.02569267243855]} defaultZoom={3}>
        <ZoomControl />

        <Marker width={50} anchor={[45.72699552758115, 4.823338371506634]} color={colorWork}/>
        <Marker width={50} anchor={[45.498699863785895, -73.5648149156413]} color={colorWork}/>

        <Marker width={50} anchor={[45.78621302557086, 4.88351890102155]} color={colorCurrent}/>
        <Marker width={50} anchor={[45.040222156922724, 3.880297197881826]} color={colorSchool}/>
        <Marker width={50} anchor={[48.8406681755476, -67.49750178937006]} color={colorSchool}/>

      </Map>
      
      </>
    );
  }