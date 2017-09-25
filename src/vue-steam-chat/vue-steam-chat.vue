<template>
  <div class="vue-steam-chat">
    <div class="vue-steam-chat__wrapper">
      <div class="vue-steam-chat__wrapper--scroll">
        <div class="vue-steam-chat__message-list">
          <div class="vue-steam-chat__message" v-for="message in messages">
            <span class="vue-steam-chat__time" v-text="formatTime(message.time)"></span>
            <span class="vue-steam-chat__username" v-text="message.username"></span>:
            <span v-text="message.text"></span>
          </div>
        </div>
      </div>
    </div>
    <form class="vue-steam-chat__form" onsubmit="return false;">
      <div class="vue-steam-chat__textarea-wrapper">
        <textarea class="vue-steam-chat__textarea" v-model="message">
        </textarea>
      </div>
      <div class="vue-steam-chat__form-footer">
        <button class="vue-steam-chat__button" @click="sendMessage">
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
      default: () => [],
      validator: (value) => {
        if (!value) return true;
        if (value.length === 0) return true;
        const result = value.every(message =>
          message.hasOwnProperty('time') &&
          message.hasOwnProperty('username') &&
          message.hasOwnProperty('text')
        );
        return result;
      },
    },
  },
  methods: {
    formatTime(time) {
      const date = new Date(time * 1000);
      const prependNumber = number => ('0' + number).slice(-2);
      return `[${prependNumber(date.getHours())}:${prependNumber(date.getMinutes())}]`;
    },
    sendMessage() {
      if (this.message === '') return;
      this.$emit('vue-steam-chat-on-message', this.message);
      this.message = '';
    },
  },
}
</script>


<style>
.vue-steam-chat {
  font-family: Arial, Helvetica, Verdana, sans-serif;
  font: Arial, Helvetica, Verdana, sans-serif;
  background-color: #383635;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #000;
  box-shadow: 1px 1px 0 0 #373b42;
  color: #8F98A0;
  display: block;
  font-size: 14px;
  overflow: hidden;
  text-align: left;
}

.vue-steam-chat__wrapper {
  background-color: #1c1b19;
  background-image: linear-gradient(#383635 5%, #1C1B19 95%);
  border: 1px solid #4D4D48;
  border-top-width: 0px;
  border-radius: 3px;
  color: #8F98A0;
  font-size: 14px;
  left: 9px;
  right: 9px;
  top: 9px;
  text-align: left;
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 123px);
}

.vue-steam-chat__wrapper--scroll {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNCRjdDRUQxM0E3RTExRTJCRUNBQUM1MDg0ODYyMzEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNCRjdDRUQyM0E3RTExRTJCRUNBQUM1MDg0ODYyMzEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0JGN0NFQ0YzQTdFMTFFMkJFQ0FBQzUwODQ4NjIzMTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0JGN0NFRDAzQTdFMTFFMkJFQ0FBQzUwODQ4NjIzMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FqRfaAAAALElEQVR42mKQl5cvZmJgYPgHIv6isv6gssDEb1wsbNzfeLX9wWIRxHKAAAMAdZsdmnuJRSUAAAAASUVORK5CYII=");
  background-position: 50% 0%;
  background-repeat: repeat-x;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  text-align: left;
  width: 100%;
}

.vue-steam-chat__message-list {
  color: #8F98A0;
  display: block;
  padding: 9px 9px 9px 5px;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
}

.chat_message_self {
  color: #8F98A0;
  display: block;
  height: 16px;
  text-align: left;
  word-wrap: break-word;
}

.vue-steam-chat__time {
  color: #8F98A0;
  display: inline;
  height: auto;
  text-align: left;
  word-wrap: break-word;
}

.vue-steam-chat__username {
  color: #57CBDE;
  display: inline;
  height: auto;
  text-align: left;
  word-wrap: break-word;
}

.vue-steam-chat__message {
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 100%;
  text-align: left;
  width: calc(100% - 18px);
  word-wrap: break-word;
}

.vue-steam-chat__form {
  bottom: 0px;
  color: #8F98A0;
  display: block;
  font-size: 14px;
  height: 107px;
  left: 9px;
  position: absolute;
  right: 9px;
  text-align: left;
  width: calc(100% - 18px);
}

.vue-steam-chat__textarea-wrapper {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #212121;
  border-radius: 3px;
  box-shadow: #3D3D3D 2px 2px 4px 1px inset;
  color: #C6D4DF;
  display: block;
  height: 37px;
  margin-bottom: 6px;
  padding: 4px 6px;
  text-align: left;
}

.vue-steam-chat__textarea {
  font-family: Arial, Helvetica, Verdana, sans-serif;
  font: Arial, Helvetica, Verdana, sans-serif;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  color: #c6d4df;
  font-size: 13px;
  height: 30px;
  outline-width: 0px;
  padding: 2px;
  resize: none;
  width: 100%;
}

.vue-steam-chat__form-footer {
  display: block;
  line-height: 36px;
  text-align: right;
}

.vue-steam-chat__button {
  background-image: linear-gradient(#2f89bc 5%, #17435c 95%);
  border: 1px solid #212121;
  border-radius: 2px;
  box-sizing: border-box;
  color: #a4d7f5;
  cursor: pointer;
  height: 34px;
  width: 76px;
}



.vue-steam-chat__wrapper--scroll::-webkit-scrollbar:vertical {
  width: 13px;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar:horizontal {
  height: 13px;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-corner, div::-webkit-scrollbar {
	background: #171717;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-track {
	border-radius: 2px;
	-webkit-border-image: none;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-track:vertical {
	margin: 1px 0px;
	background: #171717 -webkit-gradient(linear, center top, center 89, from(rgb(75, 75, 75)), to(rgb(23, 23, 23)));
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-track:horizontal {
	margin: 0px 1px;
	background: #171717 -webkit-gradient(linear, left center, 89 center, from(rgb(75, 75, 75)), to(rgb(23, 23, 23)));
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-thumb {
	background: #5d5b58;
	border-radius: 2px;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi/P//PwMhwAQibly/9h8fzUi0SefPnfuPjybepKNHjvxHpQ+j0MSbtGvXzv/I9G44vYN4kwACDAA7RESWY5qxTAAAAABJRU5ErkJggg==);
	background-repeat: no-repeat;
	background-position: center center;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-thumb:hover {
	background-color: #676461;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button {
	background-color: #575552;
	border-radius: 2px;
	background-position: center;
	background-repeat: no-repeat;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button:hover {
	background-color: #676461;
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button:vertical:decrement {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi+P//PwMyTk6I+48uxsSABFIS4//7+PqDaWRxJnQFIICukAldAQwgK2QEuQFdATLYsnkjA0CAAQCJHDCKKVQLaAAAAABJRU5ErkJggg==);
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button:vertical:increment {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiTE6I++/j68+AC2zZvJGBac78hYwgBi4FIHkmEAebQpgCMOf///9wDLJ6/dq1/0E0sjiKIphCdDGAAAMAtQVIOLvLsjoAAAAASUVORK5CYII=);
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button:horizontal:decrement {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpi+P//PwMyTk6I+8/EgARSEuP/+/j6MzChC4AAE7oACDA/eXgfRQCscs78hYxbNm9EFQQR6BJwi1AksLkTIMAAsFg1w4z04pgAAAAASUVORK5CYII=);
}

.vue-steam-chat__wrapper--scroll::-webkit-scrollbar-button:horizontal:increment {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiSE6I+w8EDMiYycfXnyElMf4/AxJgAhHoEkwwBrIEE7I2mASK4JbNGxnmzF/IyIQuANeOLAAG2NwJEGAAuVg0Qtlxn1kAAAAASUVORK5CYII=);
}
</style>
