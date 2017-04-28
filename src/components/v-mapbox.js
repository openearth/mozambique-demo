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
    }
  },
  mounted () {
    //Initialze Map
    mapboxgl.accessToken = this.accessToken;
    let options = {
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v10'
    };
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
