import Vue from 'vue'
import Todos from 'src/components/Todos'

describe('Todos.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Todos)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#appTitle').textContent)
      .to.equal('Todos App')
  })
})
