const iconMixin = {
  data() {
    return {
      uid: null
    }
  },
  mounted() {
    this.uid = this._uid;
  },
  computed: {
    url() {
      return `url(#${this.id})`
    },
    id() {
      return `color-${this.uid}`
    }
  }
}

export default iconMixin;