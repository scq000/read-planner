import Vue from 'vue';
import ProgressBar from 'src/components/ProgressBar';

describe('ProgressBar.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><progress-bar></progress-bar></div>',
      components: { ProgressBar },
    }).$mount();
    expect(vm.$el.querySelector('.progress-container').textContent).toEuqal('10%');
    // expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello World!');
  });
});
