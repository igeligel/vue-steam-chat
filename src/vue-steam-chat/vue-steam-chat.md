Put here the vue-steam-chat component usage instructions

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
      text: 'Multiline message is important that this is working lorem ipsum',
    }];

    <div>
      <vue-steam-chat
        :messages="messages"
        @custom-event-name="">
      </vue-steam-chat>
    </div>
