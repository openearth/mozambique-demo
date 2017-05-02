import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
export default {
  data () {
    return {
      map: null
    };
  },
  props: {
    accessToken: {
      type: String,
      required: true
    },
    center: {
      type: Array,
      required: false
    },
    zoom: {
      type: Number,
      required: false
    }
  },
  mounted () {
    //Initialze Map
    mapboxgl.accessToken = this.accessToken;
    let options = {
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v10'
    };
    console.log('center', this.center);
    if (this.center) {
      options.center = this.center;
    }
    options.zoom = this.zoom;
    this.map = new mapboxgl.Map(options);
    this.map.on('load', () => {
      _.each(
        this.$children,
        (child) => {
          child.deferredMountedTo(this.map);
        }
      );
    });

  },
  methods: {

  }
};
