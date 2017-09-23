The component will emit an event `vue-steam-chat-on-message` when a user clicks the button. The event will have a payload consisting of the content of the textarea.

### Default example

    const messages = [{
      time: 1506117496,
      username: 'Gaben',
      text: 'I am really rich!!!',
    }, {
      time: 1506117500,
      username: 'Solo',
      text: 'But i am your employee',
    }, {
      time: 1506117510,
      username: 'Gaben',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus.',
    }, {
      time: 1506117510,
      username: 'Gaben',
      text: 'Lorem ipsum dolor sit amet.',
    }];

    <div style="width: 300px; height: 400px;">
      <vue-steam-chat
        :messages="messages"
        @vue-steam-chat-on-message="">
      </vue-steam-chat>
    </div>

### Responsive - height/width

    <div style="width: 200px; height: 250px;">
      <vue-steam-chat
        @vue-steam-chat-on-message="">
      </vue-steam-chat>
    </div>

### Responsive - really wide steam chat box

    <div style="width: 700px; height: 300px;">
      <vue-steam-chat
        @vue-steam-chat-on-message="">
      </vue-steam-chat>
    </div>

### Scroll bar

    const messages = [{
      time: 1506117496,
      username: 'Gaben',
      text: 'I am really rich!!!',
    }, {
      time: 1506117500,
      username: 'Solo',
      text: 'But i am your employee',
    }, {
      time: 1506117510,
      username: 'Gaben',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus.',
    }, {
      time: 1506117510,
      username: 'Gaben',
      text: 'Lorem ipsum dolor sit amet.',
    }, {
      time: 1506117510,
      username: 'Solo',
      text: 'Lorem test hic forum est.',
    }];

    <div style="width: 300px; height: 250px;">
      <vue-steam-chat
        :messages="messages"
        @vue-steam-chat-on-message="">
      </vue-steam-chat>
    </div>
