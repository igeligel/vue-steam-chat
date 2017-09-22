<template>
  <div class="vue-steam-chat__message-area">
    <div id="chatlog">
        <div class="chat_dialog">
          <div class="chat_dialog_content">
            <div class="chat_dialog_scroll">
              <div class="chat_dialog_content_inner">
                <div class="chat_message" v-for="message in messages">
                  <span class="chat_timestamp">{{formatTime(message.time)}} </span>
                  <span class="personaOnline">{{message.username}}</span>: 
                  <span class="chat_message_text">{{message.text}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <form id="chatform" onsubmit="return false;">
      <div class="gray_bevel_fullwidth_chatform_textarea">
        <textarea rows="2" name="message" id="chatmessage" v-model="message">
        </textarea>
      </div>
      <div class="chatform_footer">
        <button class="sendButton" @click="sendMessage">
          SEND
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'vue-steam-chat',
  data() {
    return {
      message: '',
    };
  },
  props: {
    /**
    An array of messages which will be shown. A message consists of the three arguments
    `time`, `username` and `text`.
    `time` should be parsable by the `new Date()` function.
    `username` is a simple `string`.
    `text` Is a simple `string`.
    */
    messages: {
      type: Array,
      default: [],
    },
  },
  methods: {
    formatTime(time) {
      const date = new Date(time * 1000);
      return `[${date.getHours()}:${date.getMinutes()}]`
    },
    sendMessage() {
      if (this.message === '') return;
      this.$emit('custom-event-name', 'dwawda');
    },
  },
}
</script>


<style scoped>
* {
  font-family: Arial, Helvetica, Verdana, sans-serif;
  font: Arial, Helvetica, Verdana, sans-serif;
}

.vue-steam-chat__message-area {
  background-color: #383635;
  width: 320px;
  height: 568px;
  position: relative;
  border: 1px solid #000;
  box-shadow: 1px 1px 0 0 #373b42;
  color: #8F98A0;
  display: block;
  font-size: 14px;
  overflow: hidden;
  text-align: left;
}

#chatlog {
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 88px;
  text-align: left;
  width: 320px;
}

.chat_dialog_content {
  background-attachment:scroll;
  background-clip: border-box;
  background-color: #1c1b19;
  background-image: linear-gradient(#383635 5%, #1C1B19 95%);
  background-origin: padding-box;
  background-size: auto;
  border: 1px solid #4D4D48;
  border-top-width: 0px;
  border-radius: 3px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  bottom: 114px;
  color: #8F98A0;
  font-size: 14px;
  left: 9px;
  right: 9px;
  text-align: left;
  position: absolute;
  width: calc(100% - 20px);
  height: 445px;
}

.chat_dialog_scroll{
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNCRjdDRUQxM0E3RTExRTJCRUNBQUM1MDg0ODYyMzEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNCRjdDRUQyM0E3RTExRTJCRUNBQUM1MDg0ODYyMzEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0JGN0NFQ0YzQTdFMTFFMkJFQ0FBQzUwODQ4NjIzMTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0JGN0NFRDAzQTdFMTFFMkJFQ0FBQzUwODQ4NjIzMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FqRfaAAAALElEQVR42mKQl5cvZmJgYPgHIv6isv6gssDEb1wsbNzfeLX9wWIRxHKAAAMAdZsdmnuJRSUAAAAASUVORK5CYII=");
  background-position: 50% 0%;
  background-repeat: repeat-x;
  bottom: 0px;
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 445px;
  left: 0px;
  overflow-x: auto;
  overflow-y: auto;
  position: absolute;
  right: 0px;
  text-align: left;
  top: 0px;
  width: 300px;
}

.chat_dialog_content_inner{
  color: #8F98A0;
  display: block;
  font-size: 14px;
  padding-bottom: 9px;
  padding-left: 5px;
  padding-right: 9px;
  padding-top: 9px;
  text-align: left;
  width: 90%;
  word-wrap: break-word;
}

.chat_message_self{
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 16px;
  text-align: left;
  width: 0px;
  word-wrap: break-word;
}

.chat_timestamp{
  color: #8F98A0;
  display: inline;
  font-size: 14px;
  height: auto;
  text-align: left;
  width: auto;
  word-wrap: break-word;
}

.personaOnline{
  color: #57CBDE;
  display: inline;
  font-size: 14px;
  height: auto;
  text-align: left;
  width: auto;
  word-wrap: break-word;
}

.chat_message {
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 100%;
  text-align: left;
  width: 282px;
  word-wrap: break-word;
}

#chatform{
  bottom: 0px;
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 107px;
  left: 9px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: absolute;
  right: 9px;
  text-align: left;
  width: 302px;
}

.gray_bevel_fullwidth_chatform_textarea{
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: #212121;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: #212121;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: #212121;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: #212121;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: #3D3D3D 2px 2px 4px 1px inset;
  color: #C6D4DF;
  display: block;
  font-size: 14px;
  height: 37px;
  margin-bottom: 6px;
  outline-color: #C6D4DF;
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  text-align: left;
  width: 288px;
}

#chatmessage{
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(198, 212, 223);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(198, 212, 223);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(198, 212, 223);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(198, 212, 223);
  border-top-style: none;
  border-top-width: 0px;
  box-shadow: none;
  color: rgb(198, 212, 223);
  cursor: auto;
  display: inline-block;
  flex-direction: column;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  height: 30px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline-color: rgb(198, 212, 223);
  outline-style: none;
  outline-width: 0px; 
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
  resize: none;
  text-align: start;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none; 
  white-space: pre-wrap;
  width: 288px;
  word-spacing: 0px;
  word-wrap: break-word;
  writing-mode: lr-tb;
  -webkit-appearance: none;
  -webkit-rtl-ordering: logical;
  -webkit-user-select: text;
  -webkit-writing-mode: horizontal-tb;
}

.chatform_footer{
  color: rgb(143, 152, 160);
  display: block;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  text-align: right;
  width: 302px;
}
.sendButton {
  align-items: flex-start;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgb(47, 137, 188) 5%, rgb(23, 67, 92) 95%);
  background-origin: padding-box;
  background-size: auto;
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(33, 33, 33);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(33, 33, 33);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: rgb(164, 215, 245);
  cursor: pointer;
  display: inline-block;
  font-size: 13.3333px;
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  height: 34px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
  text-align: center;
  text-decoration: none;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  width: 76px;
  word-spacing: 0px;
  writing-mode: lr-tb;
  -webkit-appearance: none;
  -webkit-writing-mode: horizontal-tb;
}

div::-webkit-scrollbar:vertical, iframe::-webkit-scrollbar:vertical {
  width: 13px;
}

div::-webkit-scrollbar:horizontal, iframe::-webkit-scrollbar:horizontal {
  height: 13px;
}


div::-webkit-scrollbar-corner, div::-webkit-scrollbar, iframe::-webkit-scrollbar-corner, iframe::-webkit-scrollbar {
	background: #171717;
}

div::-webkit-scrollbar-track, iframe::-webkit-scrollbar-track {
	border-radius: 2px;
	-webkit-border-image: none;
}

div::-webkit-scrollbar-track:vertical, iframe::-webkit-scrollbar-track:vertical {
	margin: 1px 0px;
	background: #171717 -webkit-gradient(linear, center top, center 89, from(rgb(75, 75, 75)), to(rgb(23, 23, 23)));
}

div::-webkit-scrollbar-track:horizontal, iframe::-webkit-scrollbar-track:horizontal {
	margin: 0px 1px;
	background: #171717 -webkit-gradient(linear, left center, 89 center, from(rgb(75, 75, 75)), to(rgb(23, 23, 23)));
}

div::-webkit-scrollbar-thumb, iframe::-webkit-scrollbar-thumb {
	background: #5d5b58;
	border-radius: 2px;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi/P//PwMhwAQibly/9h8fzUi0SefPnfuPjybepKNHjvxHpQ+j0MSbtGvXzv/I9G44vYN4kwACDAA7RESWY5qxTAAAAABJRU5ErkJggg==);
	background-repeat: no-repeat;
	background-position: center center;
}

div::-webkit-scrollbar-thumb:hover, iframe::-webkit-scrollbar-thumb:hover {
	background-color: #676461;
}

div::-webkit-scrollbar-button, iframe::-webkit-scrollbar-button {
	background-color: #575552;
	border-radius: 2px;
	background-position: center;
	background-repeat: no-repeat;
}

div::-webkit-scrollbar-button:hover, iframe::-webkit-scrollbar-button:hover {
	background-color: #676461;
}

div::-webkit-scrollbar-button:vertical:decrement, iframe::-webkit-scrollbar-button:vertical:decrement {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi+P//PwMyTk6I+48uxsSABFIS4//7+PqDaWRxJnQFIICukAldAQwgK2QEuQFdATLYsnkjA0CAAQCJHDCKKVQLaAAAAABJRU5ErkJggg==);
}

div::-webkit-scrollbar-button:vertical:increment, iframe::-webkit-scrollbar-button:vertical:increment {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiTE6I++/j68+AC2zZvJGBac78hYwgBi4FIHkmEAebQpgCMOf///9wDLJ6/dq1/0E0sjiKIphCdDGAAAMAtQVIOLvLsjoAAAAASUVORK5CYII=);
}

div::-webkit-scrollbar-button:horizontal:decrement, iframe::-webkit-scrollbar-button:horizontal:decrement {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpi+P//PwMyTk6I+8/EgARSEuP/+/j6MzChC4AAE7oACDA/eXgfRQCscs78hYxbNm9EFQQR6BJwi1AksLkTIMAAsFg1w4z04pgAAAAASUVORK5CYII=);
}

div::-webkit-scrollbar-button:horizontal:increment, iframe::-webkit-scrollbar-button:horizontal:increment {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiSE6I+w8EDMiYycfXnyElMf4/AxJgAhHoEkwwBrIEE7I2mASK4JbNGxnmzF/IyIQuANeOLAAG2NwJEGAAuVg0Qtlxn1kAAAAASUVORK5CYII=);
}
</style>