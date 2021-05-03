Vue.component("tweet", {
    props: ['tweetText'],
    data: function () {
        return {
            tweetText: "",
            charactersRemaining: 280,
            commentText: '',
            liked: false,
            actualDate: ''
        }
    },
    methods: {
        countCharacters: function () {
            this.charactersRemaining = 280 - this.commentText.length;
        },
        toggleLike: function () {
            this.liked = !this.liked;
        },
        getActualDate: function () {
            var d = new Date();
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            this.actualDate = `${d.getDate()} ${months[d.getMonth()]}`;
        }
    },
    created: function () {
        this.getActualDate();
    },
    template: `
    <div class="status">
        <div class="tweet-content">
            <img src="https://pbs.twimg.com/profile_images/934753976737812480/4VrxzaV6_400x400.jpg" class="logo" alt="Twitter Avatar">
            <div class="tweet">
                <a href="https://twitter.com/jsosabreyer">Javier Sosa Breyer</a>
                <span>@sosabreyer · {{ actualDate }}</span>
                <p class="tweet-text">
                    {{ tweetText }}
                </p>
                <div class="reactions like" v-on:click="toggleLike">
                    <span class="like">
                        <span v-if="liked">♥️</span>
                        <span v-else="liked">♡</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="comment-bar">
            <textarea placeholder="tweet your reply" v-model="commentText" v-on:input="countCharacters"></textarea>
            <span class="characters-remaining">
                {{ charactersRemaining }} characters remaining
            </span>
        </div>
    </div>`
});

new Vue({
    el: "#app",
    data: {
        tweets: [
            { id: 1, tweetText: "Hello, World!"},
            { id: 2, tweetText: "Hi!"}
        ]
    }
});