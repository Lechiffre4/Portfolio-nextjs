import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  icon,
  iconRetinaUrl,
  iconSize,
} from "react-leaflet";
import React from "react";
import { Text, Image, Link } from "@chakra-ui/react";

export default function MapModule() {
  const colorSchool = "#F5F94D";
  const colorWork = "#4DAEF9";
  const colorCurrent = "lightgreen";

  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "30rem" }}
        center={[45.97990092527469, -40.01341394370078]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[45.49821418869628, -73.5702437261054]}
          icon={L.icon({
            iconUrl: "/images/Markers/Vert.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Equans.png"}
              alt={"logo"}
              w="450"
            />
            <Text textAlign="center">
              Currently working at{" "}
              <Link href="https://www.equans.fr" target="_blank">
                <b>Equans</b>
              </Link>{" "}
              as <b>BI Analyst</b>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.72699552758115, 4.823338371506634]}
          icon={L.icon({
            iconUrl: "/images/Markers/bleu.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Equans.png"}
              alt={"logo"}
              w="450"
            />
            <Text textAlign="center">
              Worked at{" "}
              <Link href="https://www.equans.fr" target="_blank">
                <b>Equans</b>
              </Link>{" "}
              as <b>Data Manager</b>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.508312223566435, -73.56645265819044]}
          icon={L.icon({
            iconUrl: "/images/Markers/bleu.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Equans.png"}
              alt={"logo"}
              w="450"
            />
            <Text textAlign="center">
              Worked at{" "}
              <Link href="https://www.equans.fr" target="_blank">
                <b>Equans</b>
              </Link>{" "}
              as <b>Maintenance and event attendant</b>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.49821418869628, -73.5702437261054]}
          icon={L.icon({
            iconUrl: "/images/Markers/Vert.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Equans.png"}
              alt={"logo"}
              w="450"
            />
            <Text textAlign="center">
              Currently working at{" "}
              <Link href="https://www.equans.fr" target="_blank">
                <b>Equans</b>
              </Link>{" "}
              as <b>BI Analyst</b>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.498699863785895, -73.5648149156413]}
          icon={L.icon({
            iconUrl: "/images/Markers/bleu.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Ikalas.png"}
              alt={"logo"}
              w="50%"
              h="50%"
              mx={"auto"}
            />
            <Text textAlign="center">
              Worked at{" "}
              <Link href="https://ikalas.com/app" target="_blank">
                <b>Ikalas</b>
              </Link>{" "}
              as <b>Web developer</b>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.78621302557086, 4.88351890102155]}
          icon={L.icon({
            iconUrl: "/images/Markers/Jaune.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/Lyon-1.png"}
              alt={"logo"}
              w="50%"
              h="50%"
              mx={"auto"}
            />
            <Text textAlign="center">
              Currently studying{" "}
              <b>Computer Science specialised in Databases</b> at{" "}
              <Link href="https://www.univ-lyon1.fr" target="_blank">
                <b>University Lyon 1</b>
              </Link>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[45.040222156922724, 3.880297197881826]}
          icon={L.icon({
            iconUrl: "/images/Markers/Jaune.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/iut-lepuyenvelay.png"}
              alt={"logo"}
              w="50%"
              h="50%"
              mx={"auto"}
            />
            <Text textAlign="center">
              Studied <b>Computer Science</b> at{" "}
              <Link href="https://www.univ-lyon1.fr" target="_blank">
                <b>University Clermont Auvergne</b>
              </Link>
            </Text>
          </Popup>
        </Marker>

        <Marker
          position={[48.8406681755476, -67.49750178937006]}
          icon={L.icon({
            iconUrl: "/images/Markers/Jaune.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <Image
              src={"/images/Corporations/cegep-matane.png"}
              alt={"logo"}
              w="50%"
              h="50%"
              mx={"auto"}
            />
            <Text textAlign="center">
              Studied <b>Computer Science</b> at{" "}
              <Link href="https://www.cegep-matane.qc.ca" target="_blank">
                <b>Cegep de Matane</b>
              </Link>{" "}
              during an international mobility
            </Text>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
