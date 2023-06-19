<template>
    <h1 class="title-lb">LeaderBoard</h1>
    <div class="lb">
        <table>
            <tr>
                <th>Rank</th>
                <th>User</th>
                <th>WPM</th>
            </tr>
            <tr>
                <td>1</td>
                <td>{{ user1 }}</td>
                <td>{{ wpm1 }}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>{{ user2 }}</td>
                <td>{{ wpm2 }}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>{{ user3 }}</td>
                <td>{{ wpm3 }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped lang="scss">
.title-lb {
    margin-top: -1%;
    font-size: 400%;
    text-align: center;
}

table {
    text-align: center;
    margin: 0 33.5% 5% 33.5%;
    width: 30%;
}

.lb {
    font-size: 200%;
}

@media only screen and (max-width: 700px) {
    .title-lb {
        padding: 3% 0;
        font-size: 300%;
        text-align: center;
        margin-top: 4%;
    }

    table {
        text-align: center;
        margin: 0 -4%;
        width: 100%;
    }

    .lb {
        font-size: 140%;
        padding-bottom: 7%;
    }
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user1: '',
            user2: '',
            user3: '',
            wpm1: '',
            wpm2: '',
            wpm3: ''
        }
    },
    mounted() {
        axios.post(`http://localhost:3000/lb`).then((res) => {
            this.user1 = res.data[0].username;
            this.user2 = res.data[1].username;
            this.user3 = res.data[2].username;
            this.wpm1 = res.data[0].best_wpm;
            this.wpm2 = res.data[1].best_wpm;
            this.wpm3 = res.data[2].best_wpm;
        })
    }
}
</script>