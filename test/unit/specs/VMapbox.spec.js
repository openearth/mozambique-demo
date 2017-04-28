import Vue from 'vue';
import VMapbox from '@/components/VMapbox';

describe('VMapbox.vue', () => {
  it('should create a map element', () => {
    const Constructor = Vue.extend(VMapbox);
    const vm = new Constructor({
      propsData: {
        accessToken: ''
      }
    }).$mount();
    expect(vm.$el.getAttribute('id')).to.equal('map');
  });
});
