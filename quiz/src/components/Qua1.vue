<template>
  <v-container>
      <div v-if="!completed">
        <v-row>
        <v-col justify="center" align="center" >
            <h1 class="rule" style="font-family: 'M PLUS 1p';">第{{questionIndex+1}}問</h1>
            <p style="font-size:20px">{{ currentQuestion.date}}？</p>
        </v-col>
        </v-row>
        <v-row justify="center" align="center">
        <div v-for="(answer,index) in currentQuestion.href" :key="index">
                <v-col justify="center" align="center" cols="auto">
                <v-card max-width="350ox" max-height="auto">
                <v-btn color="primary" class="mt-2 px-20" @click="addAnswer(index)">{{(index+1)}}</v-btn>
                <v-img :src="answer" width="350px" class="ma-2"></v-img>
                </v-card>
                </v-col>
        </div>
        </v-row>
      </div>
      <v-row>
    <div class="offset-3 col-6" v-if="completed">
        <div class="card">
            <div class="card-body">
                <p class="badge badge-dark" style="font-family: 'M PLUS 1p';">結果</p>
                <div v-for="(question,index) in this.questions" :key="index">
                    <!-- <h4 class="card-title">{{ question.date }}</h4> -->
                    <span v-if="question.answer == href[index]" style="font-family: 'M PLUS 1p';">{{index+1}}正解 &#x1F44D;</span>
                    <span v-else style="font-family: 'M PLUS 1p';">{{index+1}}不正解 &#x1F622;<br>正解は<v-img :src="question.href[question.answer]" width="350px"></v-img>でした。</span>
                    <hr>
                </div>
            </div>
        </div>
            <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >結果</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >今回のクイズの結果は</v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-12">{{total()}}問正解でした！！！！</div>
              <div v-if="total() === 0">論外・・・・・私のほしいもの何でも買ってもらいます！！！&#128148;</div>
              <div v-else-if="total() === 1 || total() ===2">私たちの思い出なんて、、、こんなもんなのね..逆に奢りなさい！&#128162;</div>
              <div v-else-if="total() === 3 || total() ===4 || total() === 5">会ったときよーたが食べたいもの奢ってあげる！！&#128515;</div>
              <div v-else-if="total() === 6 ||total() === 7">3000円分のなんでも奢るチケット！&#128518;</div>
              <div v-else-if="total() === 8 ||total() === 9">&#128525;おしかったね！ご褒美として<b>プロジェクター</b>をプレゼント！&#128525;</div>
              <div v-else-if="total() === 10">&#128175;おめでとう！！！<b>Switch</b> or <b>よーたが今欲しいもの(5万円まで)</b>プレゼント！&#128174;</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
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
            date : '伊勢神宮の鳥居を過ぎた後にあった川は？？',
            href :[
                require('@/img/4-1.jpg'),
                require('@/img/4-2.jpg')
            ],
            answer:0
            },
            {
            date : '「ちょっとHなスケスケ白ザリ」はどっち？',
            href :[
                require('@/img/8-1.jpg'),
                require('@/img/8-2.jpg')
            ],
            answer:1
            },
            {
            date : 'てるしま橋はどっち？',
            href :[
                require('@/img/1-1.jpg'),
                require('@/img/1-2.jpg')
            ],
            answer:1
            },
            {
            date : 'そうめん流し(唐船峡)の直前に行った場所はどっち？',
            href :[
                require('@/img/2-1.jpg'),
                require('@/img/2-2.jpg')
            ],
            answer:1
            },
                        {
            date : '2021/10/24に行った寿司屋はどっち？',
            href :[
                require('@/img/3-1-1.jpg'),
                require('@/img/3-1.jpg')
            ],
            answer:0
            },
                                    {
            date : '長崎鼻灯台にあった鳥居は？',
            href :[
                require('@/img/5-1.jpg'),
                require('@/img/5-2.jpg')
            ],
            answer:1
            },
                                    {
            date : 'そうめん流しにあった森は？',
            href :[
                require('@/img/6-1.jpg'),
                require('@/img/6-2.jpg')
            ],
            answer:1
            },
                                    {
            date : '鳥羽水族館はどっちでしょう？',
            href :[
                require('@/img/7-2.jpg'),
                require('@/img/7-1.jpg')
            ],
            answer:0
            },
                                    {
            date : '「肉食堂レッドミート」というお店で食べたご飯は？',
            href :[
                require('@/img/9-1.jpg'),
                require('@/img/9-2.jpg')
            ],
            answer:0
            },
                                                {
            date : 'クリスマスに行ったご飯屋さんは？？',
            href :[
                require('@/img/10-1.jpg'),
                require('@/img/10-2.jpg')
            ],
            answer:0
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
         if(!this.completed) {

        this.questionIndex++;

    }

    // } else {
    //     this.questionIndex++;
    // }
    },
    total:function(){
        if(this.completed) {
        var correctCount = 0;
        for(var i in this.href) {
            var answer = this.href[i];
            if(answer == this.questions[i].answer) {
                correctCount=correctCount+1;
            }
        }
        return correctCount;
    }
    }
    }
}
</script>