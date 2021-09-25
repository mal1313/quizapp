<template>
  <v-container>
      <div v-if="!completed">
        <v-row>
        <v-col justify="center" align="center" >
            <h1 class="rule" >第{{questionIndex+1}}問</h1>
            <p style="font-size:20px">{{ currentQuestion.date}}？</p>
        </v-col>
        </v-row>
        <v-row justify="center" align="center">
        <div v-for="(answer,index) in currentQuestion.href" :key="index">
                <v-col justify="center" align="center">
                <v-btn color="primary" class="mb-4 px-20" @click="addAnswer(index)">{{(index+1)}}</v-btn>
                <v-img :src="answer" width="350px"></v-img>
                </v-col>
        </div>
        </v-row>
      </div>
      <v-row>
    <div class="offset-3 col-6" v-if="completed">
        <div class="card">
            <div class="card-body">
                <p class="badge badge-dark">結果</p>
                <div v-for="(question,index) in this.questions" :key="index">
                    <!-- <h4 class="card-title">{{ question.date }}</h4> -->
                    <ul>
                        <li v-for="answer in question.href" :key="answer">{{ answer }}</li>
                    </ul>
                    <span v-if="question.answer == href[index]">正解 &#x1F44D;</span>
                    <span v-else>不正解 &#x1F622;<br>正解は<v-img :src="question.href[question.answer]"></v-img>でした。</span>
                    <hr>
                </div>
            </div>
        </div>
    </div>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'HelloWorld',

    data: () => ({
        questionIndex:0,
        href:[],
        questions:[
            {
            date : '2021/1/1',
            href :[
                'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1',
                'https://thumb.photo-ac.com/b8/b8f9f5fe78749f12650271c30e42ff10_t.jpeg'
            ],
            answer:1
            },
            {
            date : '2021/1/1',
            href :[
                'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1',
                'https://nozziedesign.com/wp-content/uploads/2014/12/Girl-Blowing-Confetti.jpg'
            ],
            answer:1
            },
                        {
            date : '2021/1/1',
            href :[
                'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1',
                'https://thumb.photo-ac.com/b8/b8f9f5fe78749f12650271c30e42ff10_t.jpeg'
            ],
            answer:1
            },
                        {
            date : '2021/1/1',
            href :[
                'https://i1.wp.com/girlydrop.com/wp-content/uploads/2020/02/Whiteday2020-12.jpg?resize=500%2C333&ssl=1',
                'https://koukilife.com/wp-content/uploads/2018/09/cats-10.jpg'
            ],
            answer:1
            }
        ]
    }),
    computed: {
        currentQuestion: function() {

            return this.questions[this.questionIndex];

        },
        completed: function() {

        return (this.questions.length == this.href.length);

        }
    },
    methods:{
    addAnswer: function(index) {

    this.href.push(index);

    // if(this.questions.length == this.href.length) {
    //     var correctCount = 0;
    //     for(var i in this.href) {
    //         var answer = this.href[i];
    //         if(answer == this.questions[i].answer) {
    //             correctCount=correctCount+5;
    //         }
    //     }
    // //     // alert('正解ポイントは'+correctCount +'ポイントです！');
    // this.href.push(index);

    if(!this.completed) {

        this.questionIndex++;

    }

    // } else {
    //     this.questionIndex++;
    // }
    }
    }
}
</script>