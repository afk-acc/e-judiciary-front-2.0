<template>
  <div class="w-full h-[640px] overflow-hidden maxlg:h-screen bg-white z-50 relative flex rounded-xl">
    <teleport to="body">
      <div class="fixed -left-1 -top-2 p-5 text-4xl text-primary cursor-pointer z-50"
           @click="$router.push({name:'info'})">&leftarrow;
      </div>
    </teleport>
    <v-chat-left
        :get_chat_user_list="get_chat_user_list"
        @changeChat="changeChat"
        :chat="chat"
    />
    <v-chat-right :chat="chat" :reciver="reciver"/>
  </div>
</template>

<script>
import vChatLeft from '../../components/profile/chat/vChatLeft.vue';
import vChatRight from '../../components/profile/chat/vChatRight.vue';
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    vChatLeft,
    vChatRight,
  },
  data() {
    return {
      chat: 0,
      reciver: {},
    }
  },
  methods: {
    ...mapActions(['load_chat_user_list', 'load_messages']),
    changeChat(chat) {
      this.chat = chat;
    },

  },
  computed: {
    ...mapGetters(['get_chat_user_list', 'get_messages', 'getCurrentUser'])

  },
  mounted() {
    this.$pusher.signin();
    this.load_chat_user_list({});
  },
  watch: {
    chat(val) {
      let temp = this.get_chat_user_list.filter(e => {
        return e.id === val
      })[0]
      if (temp.reciver_id === this.getCurrentUser.id) {
        this.reciver = temp.reciver_info
      } else this.reciver = temp.sender_info

    },

  }

}
</script>

<style lang="scss" scoped>

</style>