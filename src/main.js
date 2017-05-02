// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VMapbox from './components/VMapbox';
import VMapboxLayer from './components/VMapboxLayer';
import VMapboxSource from './components/VMapboxSource';
import VMapboxGeocoder from './components/VMapboxGeocoder';

import 'normalize.css';
import 'sanitize.css';
import './main.scss';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      layers: [
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 11,
          'paint': {
            'fill-extrusion-color': '#88a',
            'fill-extrusion-height': {
              'type': 'identity',
              'property': 'height'
            },
            'fill-extrusion-base': {
              'type': 'identity',
              'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
          }

        },
        {
          'id': 'extremes-100',
          'type': 'circle',
          'source': {
            'url': 'mapbox://siggyf.4vbhd90k',
            'type': 'vector'

          },
          'source-layer': 'extremes_100y-cnc4ty',
          'paint': {
            'circle-color': '#fbb03b'

          }

        }
      ],
      sources: [
      ]
    };
  },
  components: {
    'v-mapbox': VMapbox,
    'v-mapbox-layer': VMapboxLayer,
    'v-mapbox-source': VMapboxSource,
    'v-mapbox-geocoder': VMapboxGeocoder
  }
});
