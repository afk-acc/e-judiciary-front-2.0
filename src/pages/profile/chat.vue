<template>
  <teleport to="body">
    <div class="fixed -left-4 -top-5 p-4 text-4xl text-primary cursor-pointer z-50 max-lg:z-40"
         @click="$router.push({name:'info'})">&leftarrow;
    </div>
  </teleport>
  <div class="w-full p-10 h-[640px] overflow-hidden max-lg:h-screen bg-white  relative flex rounded-xl">

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