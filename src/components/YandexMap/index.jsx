import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
];

export default function Myy() {
  return (
    <YMaps>
      <Map>
        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
      </Map>
    </YMaps>
  );
}
