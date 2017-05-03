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
          'minzoom': 8,
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
          'id': 'extremes-100y-lonlat-8rk0vo',
          'type': 'circle',
          'source': {
            'url': 'mapbox://siggyf.7seqzord',
            'type': 'vector'
          },

          'source-layer': 'extremes_100y_lonlat-8rk0vo',
          'layout': {
            'visibility': 'visible'
          },
          'paint': {
            'circle-color': {
              'base': 1,
              'type': 'exponential',
              'property': 'extreme',
              'stops': [
                [
                  0,
                  'hsl(123, 70%, 57%)'
                ],
                [
                  3,
                  'hsl(31, 70%, 57%)'
                ],
                [
                  6,
                  'hsl(0, 70%, 57%)'
                ]
              ]
            },
            'circle-radius': {
              'base': 1,
              'type': 'exponential',
              'property': 'extreme',
              'stops': [
                [
                  0,
                  2
                ],
                [
                  6,
                  5
                ]
              ]
            }
          }
        },
        {
          'id': 'layer-0',
          'type': 'line',
          'source': {
            'url': 'mapbox://siggyf.da22dsx8',
            'type': 'vector'
          },
          'source-layer': 'Layer_0',
          'minzoom': 5,
          'layout': {},
          'paint': {
            'line-color': 'hsla(190, 54%, 58%, 0.49)'
          }
        },
        {
          'id': 'tracks-1w5m26',
          'type': 'line',
          'source': {
            'url': 'mapbox://siggyf.148qjw3h',
            'type': 'vector'
          },
          'source-layer': 'tracks-1w5m26',
          'minzoom': 2,
          'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-round-limit': 1
          },
          'paint': {
            'line-color': {
              'base': 1,
              'type': 'exponential',
              'property': 'wind',
              'stops': [
                [
                  0,
                  'hsl(114, 67%, 48%)'
                ],
                [
                  100,
                  'hsl(26, 67%, 48%)'
                ],
                [
                  200,
                  'hsl(0, 67%, 48%)'
                ]
              ]
            },
            'line-width': 3,
            'line-blur': 0,
            'line-opacity': 0.16
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
