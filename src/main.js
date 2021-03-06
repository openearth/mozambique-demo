// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VMapbox from "./components/VMapbox";
import VMapboxLayer from "./components/VMapboxLayer";
import VMapboxSource from "./components/VMapboxSource";
import VMapboxGeocoder from "./components/VMapboxGeocoder";
import VMapboxNavigationControl from "./components/VMapboxNavigationControl";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import "normalize.css";
import "sanitize.css";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";

import "./main.scss";
/* eslint-disable no-new */
const vm = new Vue({
  el: "#app",
  data() {
    let scenarios = [
      {
        "id": "10y",
        "name": "Período de Retorno: 10 anos",
        "subtitle": "Baixa frequência, Baixa intensidade",
        "avatar": "10anos.png",
        "filter": [
          "==",
          "scenario",
          "10y"
        ]
      },
      {
        "id": "100y",
        "name": "Período de Retorno: 100 anos",
        "subtitle": "Média frequência, Média intensidade",
        "avatar": "100anos.png",
        "filter": [
          "==",
          "scenario",
          "100y"
        ]
      },
      {
        "id": "500y",
        "name": "Período de Retorno: 500 anos",
        "subtitle": "ALta frequência, Alta intensidade",
        "avatar": "500anos.png",
        "filter": [
          "==",
          "scenario",
          "500y"
        ]
      }
    ];
    return {
      selectedScenario: _.first(scenarios),
      layers: [
          {
          "id": "extremes-scenarios",
          "active": false,
          "type": "circle",
          "metadata": {
            hidden: true,
            scenarios: scenarios
          },
          "source": {
            "url": "mapbox://camvdvries.2oeagw3w",
            "type": "vector"
          },
          "source-layer": "extremes-8zrjds",
          "minzoom": 4,
          "filter": [
            "==",
            "scenario",
            "10y"
          ],
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "circle-color": {
              "base": 1,
              "type": "exponential",
              "property": "extreme",
              "stops": [
                [
                  1,
                  "hsl(120, 70%, 57%)"
                ],
                [
                  1.5,
                  "hsl(105, 70%, 57%)"
                ],
                [
                  2,
                  "hsl(90, 70%, 57%)"
                ],
                [
                  2.5,
                  "hsl(75, 70%, 57%)"
                ],
                [
                  3,
                  "hsl(60, 70%, 57%)"
                ],
                [
                  3.5,
                  "hsl(45, 70%, 57%)"
                ],
                [
                  4,
                  "hsl(30, 70%, 57%)"
                ],
                [
                  4.5,
                  "hsl(15, 70%, 57%)"
                ],
                [
                  5,
                  "hsl(0, 70%, 57%)"
                ],
              ]
            }
          }
        },
        {
          "id": "3d-buildings",
          "active": false,
          "metadata": {
            "name": "Cidades, infraestrutura",
            "subtitle": "Edifícios gerados a partir de OSM",
            "avatar": "city-icon.png"
          },
          "source": "composite",
          "source-layer": "building",
          "filter": ["==", "extrude", "true"],
          "type": "fill-extrusion",
          "minzoom": 8,
          "paint": {
            "fill-extrusion-color": "#88a",
            "fill-extrusion-height": {
              "type": "identity",
              "property": "height"
            },
            "fill-extrusion-base": {
              "type": "identity",
              "property": "min_height"
            },
            "fill-extrusion-opacity": .6
          }

        },
        {
          "id": "layer-0",
          "active": false,
          "metadata": {
            "name": "Malha numérica",
            "subtitle": "Usada nas Simulações",
            "avatar": "icon_mesh.jpg"
          },
          "type": "line",
          "source": {
            "url": "mapbox://siggyf.da22dsx8",
            "type": "vector"
          },
          "source-layer": "Layer_0",
          "minzoom": 5,
          "layout": {},
          "paint": {
            "line-color": "hsla(190, 54%, 58%, 0.49)"
          }
        },
        {
          "id": "tracks-1w5m26",
          "active": false,
          "metadata": {
            "name": "Ciclones tropicais",
            "subtitle": "Trajectórias simuladas",
            "avatar": "cyclone.png"
          },
          "type": "line",
          "source": {
            "url": "mapbox://siggyf.148qjw3h",
            "type": "vector"
          },
          "source-layer": "tracks-1w5m26",
          "minzoom": 2,
          "layout": {
            "visibility": "visible",
            "line-join": "round",
            "line-round-limit": 1
          },
          "paint": {
            "line-color": {
              "base": 1,
              "type": "interval",
              "property": "wind",
              "stops": [
                [
                  20,
                  "hsl(123, 70%, 57%)"
                ],
                [
                  40,
                  "hsl(82, 70%, 57%)"
                ],
                [
                  60,
                  "hsl(41, 70%, 57%)"
                ],
                [
                  80,
                  "hsl(0, 70%, 57%)"
                ]
              ]
            },
            "line-opacity": 0.5,
            "line-blur": 0,
            "line-width": 2
          }
        }

      ],
      sources: [
      ]
    };
  },
  components: {
    "v-mapbox": VMapbox,
    "v-mapbox-layer": VMapboxLayer,
    "v-mapbox-source": VMapboxSource,
    "v-mapbox-geocoder": VMapboxGeocoder,
    "v-mapbox-navigation-control": VMapboxNavigationControl
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.map.on(
        "load",
        () => {
          // Implement logo"s here
          var logo = "static/images/logos.png"
          var img = document.createElement("img")
          img.src = (logo);
          img.width = 350;

          var logo_class = document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0];
          logo_class.firstChild.insertBefore(img, logo_class.firstChild.firstChild);
          logo_class.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          this.syncLayerVisibility();
          this.selectScenario(this.selectedScenario);
        }
      );
    });

  },
  watch: {
    selectedScenario(newScenario, oldScenario) {
      console.log("setting scenario", newScenario);
      this.selectScenario(newScenario);

    }
  },
  computed: {
    scenarioLayer: {
      get: function() {
        return _.first(
          _.filter(
            this.layers,
            (layer) => { return _.has(layer, "metadata.scenarios"); }
          )
        );
      }
    }
  },
  methods: {
    selectScenario(scenario) {
      let filter = scenario.filter;
      this.$refs.map.map.setFilter("extremes-scenarios", filter);
    },
    syncLayerVisibility() {
      _.each(this.layers, (layer) => {
        if (layer.active) {
          this.$refs.map.map.setLayoutProperty(layer.id, "visibility", "visible");
        } else {
          this.$refs.map.map.setLayoutProperty(layer.id, "visibility", "none");
        }
      });

    }
  }
});
// add watchers that are deep
vm.$watch(
  "layers",
  function(layers) {
    vm.syncLayerVisibility();
  },
  {deep: true}
);
