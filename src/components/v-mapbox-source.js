export default {
  data () {
    return {
    };
  },
  props: {
    options: {
      default: () => {
        return {};
      },
      type: Object
    }
  },
  mounted () {
  },
  methods: {
    deferredMountedTo(map) {
      map.addSource(this.options.id, _.omit(this.options, ['id']));
    }
  }
};
