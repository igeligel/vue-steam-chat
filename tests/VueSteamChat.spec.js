import { mount } from 'vue-test-utils';
import sinon from 'sinon';
import VueSteamChat from '@/vue-steam-chat/vue-steam-chat.vue';

describe('General tests', () => {
  it('Test if empty component is a vue instance', () => {
    const wrapper = mount(VueSteamChat);
    expect(wrapper.isVueComponent).toBe(true);
  });
});

describe('Test messages property', () => {
  it('Test if no message is found in default state', () => {
    const wrapper = mount(VueSteamChat);
    const vueSteamChatMessages = wrapper.findAll('.vue-steam-chat__message');
    expect(vueSteamChatMessages).toHaveLength(0);
  });

  it('Test single payload', () => {
    const wrapper = mount(VueSteamChat);
    const messages = [{
      time: 1506117496,
      username: 'Gaben',
      text: 'I am really rich!!!',
    }];
    wrapper.setProps({ messages });
    const vueSteamChatMessages = wrapper.findAll('.vue-steam-chat__message');
    expect(vueSteamChatMessages).toHaveLength(1);
  });

  it('Test multiple payloads', () => {
    const wrapper = mount(VueSteamChat);
    const messages = [{
      time: 1506117496,
      username: 'Gaben',
      text: 'I am really rich!!!',
    }, {
      time: 1506117496,
      username: 'Cool User',
      text: 'Lorem Ipsum',
    }];
    wrapper.setProps({ messages });
    let vueSteamChatMessages = wrapper.findAll('.vue-steam-chat__message');
    expect(vueSteamChatMessages).toHaveLength(2);
    messages.push({
      time: 1506117496,
      username: 'Third user',
      text: 'I am really rich!!!',
    });
    wrapper.setProps({ messages });
    vueSteamChatMessages = wrapper.findAll('.vue-steam-chat__message');
    expect(vueSteamChatMessages).toHaveLength(3);
  });

  it('Test date abbreviation', () => {
    const wrapper = mount(VueSteamChat);
    const messages = [{
      time: 1506117496,
      username: 'Gaben',
      text: 'I am really rich!!!',
    }];
    wrapper.setProps({ messages });
    const dateInComponent = wrapper.find('.vue-steam-chat__time').text();
    const date = new Date(1506117496 * 1000);
    const calculatedDate = `[${date.getHours()}:${date.getMinutes()}]`;
    expect(dateInComponent).toBe(calculatedDate);
  });
});

describe('Textarea and Send functionality', () => {
  it('Test if event is triggered after button click', () => {
    const stub = jest.fn()
    const wrapper = mount(VueSteamChat);
    wrapper.setData({ message: 'I am really cool' });
    wrapper.vm.$on('vue-steam-chat-on-message', stub);
    wrapper.find('.vue-steam-chat__button').trigger('click');
    expect(stub).toBeCalledWith('I am really cool');
  });
});
