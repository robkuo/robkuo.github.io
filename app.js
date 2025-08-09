// Japanese Word Learning Application

// Word data - 100 most common Japanese words
const wordData = [
    {
        japanese: "食べます",
        hiragana: "たべます",
        chinese: "吃",
        conjugations: {
            "辞典形": { form: "食べる", hiragana: "たべる" },
            "ます形": { form: "食べます", hiragana: "たべます" },
            "て形": { form: "食べて", hiragana: "たべて" },
            "た形": { form: "食べた", hiragana: "たべた" },
            "ない形": { form: "食べない", hiragana: "たべない" },
            "た形否定": { form: "食べなかった", hiragana: "たべなかった" }
        }
    },
    {
        japanese: "行きます",
        hiragana: "いきます",
        chinese: "去",
        conjugations: {
            "辞典形": { form: "行く", hiragana: "いく" },
            "ます形": { form: "行きます", hiragana: "いきます" },
            "て形": { form: "行って", hiragana: "いって" },
            "た形": { form: "行った", hiragana: "いった" },
            "ない形": { form: "行かない", hiragana: "いかない" },
            "た形否定": { form: "行かなかった", hiragana: "いかなかった" }
        }
    },
    {
        japanese: "見ます",
        hiragana: "みます",
        chinese: "看",
        conjugations: {
            "辞典形": { form: "見る", hiragana: "みる" },
            "ます形": { form: "見ます", hiragana: "みます" },
            "て形": { form: "見て", hiragana: "みて" },
            "た形": { form: "見た", hiragana: "みた" },
            "ない形": { form: "見ない", hiragana: "みない" },
            "た形否定": { form: "見なかった", hiragana: "みなかった" }
        }
    },
    {
        japanese: "来ます",
        hiragana: "きます",
        chinese: "来",
        conjugations: {
            "辞典形": { form: "来る", hiragana: "くる" },
            "ます形": { form: "来ます", hiragana: "きます" },
            "て形": { form: "来て", hiragana: "きて" },
            "た形": { form: "来た", hiragana: "きた" },
            "ない形": { form: "来ない", hiragana: "こない" },
            "た形否定": { form: "来なかった", hiragana: "こなかった" }
        }
    },
    {
        japanese: "します",
        hiragana: "します",
        chinese: "做",
        conjugations: {
            "辞典形": { form: "する", hiragana: "する" },
            "ます形": { form: "します", hiragana: "します" },
            "て形": { form: "して", hiragana: "して" },
            "た形": { form: "した", hiragana: "した" },
            "ない形": { form: "しない", hiragana: "しない" },
            "た形否定": { form: "しなかった", hiragana: "しなかった" }
        }
    },
    {
        japanese: "言います",
        hiragana: "いいます",
        chinese: "说",
        conjugations: {
            "辞典形": { form: "言う", hiragana: "いう" },
            "ます形": { form: "言います", hiragana: "いいます" },
            "て形": { form: "言って", hiragana: "いって" },
            "た形": { form: "言った", hiragana: "いった" },
            "ない形": { form: "言わない", hiragana: "いわない" },
            "た形否定": { form: "言わなかった", hiragana: "いわなかった" }
        }
    },
    {
        japanese: "思います",
        hiragana: "おもいます",
        chinese: "想",
        conjugations: {
            "辞典形": { form: "思う", hiragana: "おもう" },
            "ます形": { form: "思います", hiragana: "おもいます" },
            "て形": { form: "思って", hiragana: "おもって" },
            "た形": { form: "思った", hiragana: "おもった" },
            "ない形": { form: "思わない", hiragana: "おもわない" },
            "た形否定": { form: "思わなかった", hiragana: "おもわなかった" }
        }
    },
    {
        japanese: "知ります",
        hiragana: "しります",
        chinese: "知道",
        conjugations: {
            "辞典形": { form: "知る", hiragana: "しる" },
            "ます形": { form: "知ります", hiragana: "しります" },
            "て形": { form: "知って", hiragana: "しって" },
            "た形": { form: "知った", hiragana: "しった" },
            "ない形": { form: "知らない", hiragana: "しらない" },
            "た形否定": { form: "知らなかった", hiragana: "しらなかった" }
        }
    },
    {
        japanese: "出ます",
        hiragana: "でます",
        chinese: "出来",
        conjugations: {
            "辞典形": { form: "出る", hiragana: "でる" },
            "ます形": { form: "出ます", hiragana: "でます" },
            "て形": { form: "出て", hiragana: "でて" },
            "た形": { form: "出た", hiragana: "でた" },
            "ない形": { form: "出ない", hiragana: "でない" },
            "た形否定": { form: "出なかった", hiragana: "でなかった" }
        }
    },
    {
        japanese: "聞きます",
        hiragana: "ききます",
        chinese: "听",
        conjugations: {
            "辞典形": { form: "聞く", hiragana: "きく" },
            "ます形": { form: "聞きます", hiragana: "ききます" },
            "て形": { form: "聞いて", hiragana: "きいて" },
            "た形": { form: "聞いた", hiragana: "きいた" },
            "ない形": { form: "聞かない", hiragana: "きかない" },
            "た形否定": { form: "聞かなかった", hiragana: "きかなかった" }
        }
    },
    {
        japanese: "読みます",
        hiragana: "よみます",
        chinese: "读",
        conjugations: {
            "辞典形": { form: "読む", hiragana: "よむ" },
            "ます形": { form: "読みます", hiragana: "よみます" },
            "て形": { form: "読んで", hiragana: "よんで" },
            "た形": { form: "読んだ", hiragana: "よんだ" },
            "ない形": { form: "読まない", hiragana: "よまない" },
            "た形否定": { form: "読まなかった", hiragana: "よまなかった" }
        }
    },
    {
        japanese: "書きます",
        hiragana: "かきます",
        chinese: "写",
        conjugations: {
            "辞典形": { form: "書く", hiragana: "かく" },
            "ます形": { form: "書きます", hiragana: "かきます" },
            "て形": { form: "書いて", hiragana: "かいて" },
            "た形": { form: "書いた", hiragana: "かいた" },
            "ない形": { form: "書かない", hiragana: "かかない" },
            "た形否定": { form: "書かなかった", hiragana: "かかなかった" }
        }
    },
    {
        japanese: "話します",
        hiragana: "はなします",
        chinese: "说话",
        conjugations: {
            "辞典形": { form: "話す", hiragana: "はなす" },
            "ます形": { form: "話します", hiragana: "はなします" },
            "て形": { form: "話して", hiragana: "はなして" },
            "た形": { form: "話した", hiragana: "はなした" },
            "ない形": { form: "話さない", hiragana: "はなさない" },
            "た形否定": { form: "話さなかった", hiragana: "はなさなかった" }
        }
    },
    {
        japanese: "立ちます",
        hiragana: "たちます",
        chinese: "站",
        conjugations: {
            "辞典形": { form: "立つ", hiragana: "たつ" },
            "ます形": { form: "立ちます", hiragana: "たちます" },
            "て形": { form: "立って", hiragana: "たって" },
            "た形": { form: "立った", hiragana: "たった" },
            "ない形": { form: "立たない", hiragana: "たたない" },
            "た形否定": { form: "立たなかった", hiragana: "たたなかった" }
        }
    },
    {
        japanese: "座ります",
        hiragana: "すわります",
        chinese: "坐",
        conjugations: {
            "辞典形": { form: "座る", hiragana: "すわる" },
            "ます形": { form: "座ります", hiragana: "すわります" },
            "て形": { form: "座って", hiragana: "すわって" },
            "た形": { form: "座った", hiragana: "すわった" },
            "ない形": { form: "座らない", hiragana: "すわらない" },
            "た形否定": { form: "座らなかった", hiragana: "すわらなかった" }
        }
    },
    {
        japanese: "歩きます",
        hiragana: "あるきます",
        chinese: "走路",
        conjugations: {
            "辞典形": { form: "歩く", hiragana: "あるく" },
            "ます形": { form: "歩きます", hiragana: "あるきます" },
            "て形": { form: "歩いて", hiragana: "あるいて" },
            "た形": { form: "歩いた", hiragana: "あるいた" },
            "ない形": { form: "歩かない", hiragana: "あるかない" },
            "た形否定": { form: "歩かなかった", hiragana: "あるかなかった" }
        }
    },
    {
        japanese: "走ります",
        hiragana: "はしります",
        chinese: "跑",
        conjugations: {
            "辞典形": { form: "走る", hiragana: "はしる" },
            "ます形": { form: "走ります", hiragana: "はしります" },
            "て形": { form: "走って", hiragana: "はしって" },
            "た形": { form: "走った", hiragana: "はしった" },
            "ない形": { form: "走らない", hiragana: "はしらない" },
            "た形否定": { form: "走らなかった", hiragana: "はしらなかった" }
        }
    },
    {
        japanese: "飲みます",
        hiragana: "のみます",
        chinese: "喝",
        conjugations: {
            "辞典形": { form: "飲む", hiragana: "のむ" },
            "ます形": { form: "飲みます", hiragana: "のみます" },
            "て形": { form: "飲んで", hiragana: "のんで" },
            "た形": { form: "飲んだ", hiragana: "のんだ" },
            "ない形": { form: "飲まない", hiragana: "のまない" },
            "た形否定": { form: "飲まなかった", hiragana: "のまなかった" }
        }
    },
    {
        japanese: "買います",
        hiragana: "かいます",
        chinese: "买",
        conjugations: {
            "辞典形": { form: "買う", hiragana: "かう" },
            "ます形": { form: "買います", hiragana: "かいます" },
            "て形": { form: "買って", hiragana: "かって" },
            "た形": { form: "買った", hiragana: "かった" },
            "ない形": { form: "買わない", hiragana: "かわない" },
            "た形否定": { form: "買わなかった", hiragana: "かわなかった" }
        }
    },
    {
        japanese: "売ります",
        hiragana: "うります",
        chinese: "卖",
        conjugations: {
            "辞典形": { form: "売る", hiragana: "うる" },
            "ます形": { form: "売ります", hiragana: "うります" },
            "て形": { form: "売って", hiragana: "うって" },
            "た形": { form: "売った", hiragana: "うった" },
            "ない形": { form: "売らない", hiragana: "うらない" },
            "た形否定": { form: "売らなかった", hiragana: "うらなかった" }
        }
    },
    {
        japanese: "作ります",
        hiragana: "つくります",
        chinese: "做",
        conjugations: {
            "辞典形": { form: "作る", hiragana: "つくる" },
            "ます形": { form: "作ります", hiragana: "つくります" },
            "て形": { form: "作って", hiragana: "つくって" },
            "た形": { form: "作った", hiragana: "つくった" },
            "ない形": { form: "作らない", hiragana: "つくらない" },
            "た形否定": { form: "作らなかった", hiragana: "つくらなかった" }
        }
    },
    {
        japanese: "使います",
        hiragana: "つかいます",
        chinese: "使用",
        conjugations: {
            "辞典形": { form: "使う", hiragana: "つかう" },
            "ます形": { form: "使います", hiragana: "つかいます" },
            "て形": { form: "使って", hiragana: "つかって" },
            "た形": { form: "使った", hiragana: "つかった" },
            "ない形": { form: "使わない", hiragana: "つかわない" },
            "た形否定": { form: "使わなかった", hiragana: "つかわなかった" }
        }
    },
    {
        japanese: "持ちます",
        hiragana: "もちます",
        chinese: "拿",
        conjugations: {
            "辞典形": { form: "持つ", hiragana: "もつ" },
            "ます形": { form: "持ちます", hiragana: "もちます" },
            "て形": { form: "持って", hiragana: "もって" },
            "た形": { form: "持った", hiragana: "もった" },
            "ない形": { form: "持たない", hiragana: "もたない" },
            "た形否定": { form: "持たなかった", hiragana: "もたなかった" }
        }
    },
    {
        japanese: "取ります",
        hiragana: "とります",
        chinese: "拿取",
        conjugations: {
            "辞典形": { form: "取る", hiragana: "とる" },
            "ます形": { form: "取ります", hiragana: "とります" },
            "て形": { form: "取って", hiragana: "とって" },
            "た形": { form: "取った", hiragana: "とった" },
            "ない形": { form: "取らない", hiragana: "とらない" },
            "た形否定": { form: "取らなかった", hiragana: "とらなかった" }
        }
    },
    {
        japanese: "置きます",
        hiragana: "おきます",
        chinese: "放",
        conjugations: {
            "辞典形": { form: "置く", hiragana: "おく" },
            "ます形": { form: "置きます", hiragana: "おきます" },
            "て形": { form: "置いて", hiragana: "おいて" },
            "た形": { form: "置いた", hiragana: "おいた" },
            "ない形": { form: "置かない", hiragana: "おかない" },
            "た形否定": { form: "置かなかった", hiragana: "おかなかった" }
        }
    },
    {
        japanese: "開けます",
        hiragana: "あけます",
        chinese: "打开",
        conjugations: {
            "辞典形": { form: "開ける", hiragana: "あける" },
            "ます形": { form: "開けます", hiragana: "あけます" },
            "て形": { form: "開けて", hiragana: "あけて" },
            "た形": { form: "開けた", hiragana: "あけた" },
            "ない形": { form: "開けない", hiragana: "あけない" },
            "た形否定": { form: "開けなかった", hiragana: "あけなかった" }
        }
    },
    {
        japanese: "閉めます",
        hiragana: "しめます",
        chinese: "关闭",
        conjugations: {
            "辞典形": { form: "閉める", hiragana: "しめる" },
            "ます形": { form: "閉めます", hiragana: "しめます" },
            "て形": { form: "閉めて", hiragana: "しめて" },
            "た形": { form: "閉めた", hiragana: "しめた" },
            "ない形": { form: "閉めない", hiragana: "しめない" },
            "た形否定": { form: "閉めなかった", hiragana: "しめなかった" }
        }
    },
    {
        japanese: "入ります",
        hiragana: "はいります",
        chinese: "进入",
        conjugations: {
            "辞典形": { form: "入る", hiragana: "はいる" },
            "ます形": { form: "入ります", hiragana: "はいります" },
            "て形": { form: "入って", hiragana: "はいって" },
            "た形": { form: "入った", hiragana: "はいった" },
            "ない形": { form: "入らない", hiragana: "はいらない" },
            "た形否定": { form: "入らなかった", hiragana: "はいらなかった" }
        }
    },
    {
        japanese: "出ます",
        hiragana: "でます",
        chinese: "出去",
        conjugations: {
            "辞典形": { form: "出る", hiragana: "でる" },
            "ます形": { form: "出ます", hiragana: "でます" },
            "て形": { form: "出て", hiragana: "でて" },
            "た形": { form: "出た", hiragana: "でた" },
            "ない形": { form: "出ない", hiragana: "でない" },
            "た形否定": { form: "出なかった", hiragana: "でなかった" }
        }
    },
    {
        japanese: "帰ります",
        hiragana: "かえります",
        chinese: "回去",
        conjugations: {
            "辞典形": { form: "帰る", hiragana: "かえる" },
            "ます形": { form: "帰ります", hiragana: "かえります" },
            "て形": { form: "帰って", hiragana: "かえって" },
            "た形": { form: "帰った", hiragana: "かえった" },
            "ない形": { form: "帰らない", hiragana: "かえらない" },
            "た形否定": { form: "帰らなかった", hiragana: "かえらなかった" }
        }
    },
    {
        japanese: "起きます",
        hiragana: "おきます",
        chinese: "起床",
        conjugations: {
            "辞典形": { form: "起きる", hiragana: "おきる" },
            "ます形": { form: "起きます", hiragana: "おきます" },
            "て形": { form: "起きて", hiragana: "おきて" },
            "た形": { form: "起きた", hiragana: "おきた" },
            "ない形": { form: "起きない", hiragana: "おきない" },
            "た形否定": { form: "起きなかった", hiragana: "おきなかった" }
        }
    },
    {
        japanese: "寝ます",
        hiragana: "ねます",
        chinese: "睡觉",
        conjugations: {
            "辞典形": { form: "寝る", hiragana: "ねる" },
            "ます形": { form: "寝ます", hiragana: "ねます" },
            "て形": { form: "寝て", hiragana: "ねて" },
            "た形": { form: "寝た", hiragana: "ねた" },
            "ない形": { form: "寝ない", hiragana: "ねない" },
            "た形否定": { form: "寝なかった", hiragana: "ねなかった" }
        }
    },
    {
        japanese: "働きます",
        hiragana: "はたらきます",
        chinese: "工作",
        conjugations: {
            "辞典形": { form: "働く", hiragana: "はたらく" },
            "ます形": { form: "働きます", hiragana: "はたらきます" },
            "て形": { form: "働いて", hiragana: "はたらいて" },
            "た形": { form: "働いた", hiragana: "はたらいた" },
            "ない形": { form: "働かない", hiragana: "はたらかない" },
            "た形否定": { form: "働かなかった", hiragana: "はたらかなかった" }
        }
    },
    {
        japanese: "勉強します",
        hiragana: "べんきょうします",
        chinese: "学习",
        conjugations: {
            "辞典形": { form: "勉強する", hiragana: "べんきょうする" },
            "ます形": { form: "勉強します", hiragana: "べんきょうします" },
            "て形": { form: "勉強して", hiragana: "べんきょうして" },
            "た形": { form: "勉強した", hiragana: "べんきょうした" },
            "ない形": { form: "勉強しない", hiragana: "べんきょうしない" },
            "た形否定": { form: "勉強しなかった", hiragana: "べんきょうしなかった" }
        }
    },
    {
        japanese: "教えます",
        hiragana: "おしえます",
        chinese: "教",
        conjugations: {
            "辞典形": { form: "教える", hiragana: "おしえる" },
            "ます形": { form: "教えます", hiragana: "おしえます" },
            "て形": { form: "教えて", hiragana: "おしえて" },
            "た形": { form: "教えた", hiragana: "おしえた" },
            "ない形": { form: "教えない", hiragana: "おしえない" },
            "た形否定": { form: "教えなかった", hiragana: "おしえなかった" }
        }
    },
    {
        japanese: "習います",
        hiragana: "ならいます",
        chinese: "学",
        conjugations: {
            "辞典形": { form: "習う", hiragana: "ならう" },
            "ます形": { form: "習います", hiragana: "ならいます" },
            "て形": { form: "習って", hiragana: "ならって" },
            "た形": { form: "習った", hiragana: "ならった" },
            "ない形": { form: "習わない", hiragana: "ならわない" },
            "た形否定": { form: "習わなかった", hiragana: "ならわなかった" }
        }
    },
    {
        japanese: "覚えます",
        hiragana: "おぼえます",
        chinese: "记住",
        conjugations: {
            "辞典形": { form: "覚える", hiragana: "おぼえる" },
            "ます形": { form: "覚えます", hiragana: "おぼえます" },
            "て形": { form: "覚えて", hiragana: "おぼえて" },
            "た形": { form: "覚えた", hiragana: "おぼえた" },
            "ない形": { form: "覚えない", hiragana: "おぼえない" },
            "た形否定": { form: "覚えなかった", hiragana: "おぼえなかった" }
        }
    },
    {
        japanese: "忘れます",
        hiragana: "わすれます",
        chinese: "忘记",
        conjugations: {
            "辞典形": { form: "忘れる", hiragana: "わすれる" },
            "ます形": { form: "忘れます", hiragana: "わすれます" },
            "て形": { form: "忘れて", hiragana: "わすれて" },
            "た形": { form: "忘れた", hiragana: "わすれた" },
            "ない形": { form: "忘れない", hiragana: "わすれない" },
            "た形否定": { form: "忘れなかった", hiragana: "わすれなかった" }
        }
    },
    {
        japanese: "会います",
        hiragana: "あいます",
        chinese: "见面",
        conjugations: {
            "辞典形": { form: "会う", hiragana: "あう" },
            "ます形": { form: "会います", hiragana: "あいます" },
            "て形": { form: "会って", hiragana: "あって" },
            "た形": { form: "会った", hiragana: "あった" },
            "ない形": { form: "会わない", hiragana: "あわない" },
            "た形否定": { form: "会わなかった", hiragana: "あわなかった" }
        }
    },
    {
        japanese: "待ちます",
        hiragana: "まちます",
        chinese: "等待",
        conjugations: {
            "辞典形": { form: "待つ", hiragana: "まつ" },
            "ます形": { form: "待ちます", hiragana: "まちます" },
            "て形": { form: "待って", hiragana: "まって" },
            "た形": { form: "待った", hiragana: "まった" },
            "ない形": { form: "待たない", hiragana: "またない" },
            "た形否定": { form: "待たなかった", hiragana: "またなかった" }
        }
    },
    {
        japanese: "呼びます",
        hiragana: "よびます",
        chinese: "叫",
        conjugations: {
            "辞典形": { form: "呼ぶ", hiragana: "よぶ" },
            "ます形": { form: "呼びます", hiragana: "よびます" },
            "て形": { form: "呼んで", hiragana: "よんで" },
            "た形": { form: "呼んだ", hiragana: "よんだ" },
            "ない形": { form: "呼ばない", hiragana: "よばない" },
            "た形否定": { form: "呼ばなかった", hiragana: "よばなかった" }
        }
    },
    {
        japanese: "泳ぎます",
        hiragana: "およぎます",
        chinese: "游泳",
        conjugations: {
            "辞典形": { form: "泳ぐ", hiragana: "およぐ" },
            "ます形": { form: "泳ぎます", hiragana: "およぎます" },
            "て形": { form: "泳いで", hiragana: "およいで" },
            "た形": { form: "泳いだ", hiragana: "およいだ" },
            "ない形": { form: "泳がない", hiragana: "およがない" },
            "た形否定": { form: "泳がなかった", hiragana: "およがなかった" }
        }
    },
    {
        japanese: "遊びます",
        hiragana: "あそびます",
        chinese: "玩",
        conjugations: {
            "辞典形": { form: "遊ぶ", hiragana: "あそぶ" },
            "ます形": { form: "遊びます", hiragana: "あそびます" },
            "て形": { form: "遊んで", hiragana: "あそんで" },
            "た形": { form: "遊んだ", hiragana: "あそんだ" },
            "ない形": { form: "遊ばない", hiragana: "あそばない" },
            "た形否定": { form: "遊ばなかった", hiragana: "あそばなかった" }
        }
    },
    {
        japanese: "休みます",
        hiragana: "やすみます",
        chinese: "休息",
        conjugations: {
            "辞典形": { form: "休む", hiragana: "やすむ" },
            "ます形": { form: "休みます", hiragana: "やすみます" },
            "て形": { form: "休んで", hiragana: "やすんで" },
            "た形": { form: "休んだ", hiragana: "やすんだ" },
            "ない形": { form: "休まない", hiragana: "やすまない" },
            "た形否定": { form: "休まなかった", hiragana: "やすまなかった" }
        }
    },
    {
        japanese: "洗います",
        hiragana: "あらいます",
        chinese: "洗",
        conjugations: {
            "辞典形": { form: "洗う", hiragana: "あらう" },
            "ます形": { form: "洗います", hiragana: "あらいます" },
            "て形": { form: "洗って", hiragana: "あらって" },
            "た形": { form: "洗った", hiragana: "あらった" },
            "ない形": { form: "洗わない", hiragana: "あらわない" },
            "た形否定": { form: "洗わなかった", hiragana: "あらわなかった" }
        }
    },
    {
        japanese: "着ます",
        hiragana: "きます",
        chinese: "穿",
        conjugations: {
            "辞典形": { form: "着る", hiragana: "きる" },
            "ます形": { form: "着ます", hiragana: "きます" },
            "て形": { form: "着て", hiragana: "きて" },
            "た形": { form: "着た", hiragana: "きた" },
            "ない形": { form: "着ない", hiragana: "きない" },
            "た形否定": { form: "着なかった", hiragana: "きなかった" }
        }
    },
    {
        japanese: "脱ぎます",
        hiragana: "ぬぎます",
        chinese: "脱",
        conjugations: {
            "辞典形": { form: "脱ぐ", hiragana: "ぬぐ" },
            "ます形": { form: "脱ぎます", hiragana: "ぬぎます" },
            "て形": { form: "脱いで", hiragana: "ぬいで" },
            "た形": { form: "脱いだ", hiragana: "ぬいだ" },
            "ない形": { form: "脱がない", hiragana: "ぬがない" },
            "た形否定": { form: "脱がなかった", hiragana: "ぬがなかった" }
        }
    },
    {
        japanese: "料理します",
        hiragana: "りょうりします",
        chinese: "做菜",
        conjugations: {
            "辞典形": { form: "料理する", hiragana: "りょうりする" },
            "ます形": { form: "料理します", hiragana: "りょうりします" },
            "て形": { form: "料理して", hiragana: "りょうりして" },
            "た形": { form: "料理した", hiragana: "りょうりした" },
            "ない形": { form: "料理しない", hiragana: "りょうりしない" },
            "た形否定": { form: "料理しなかった", hiragana: "りょうりしなかった" }
        }
    },
    {
        japanese: "掃除します",
        hiragana: "そうじします",
        chinese: "打扫",
        conjugations: {
            "辞典形": { form: "掃除する", hiragana: "そうじする" },
            "ます形": { form: "掃除します", hiragana: "そうじします" },
            "て形": { form: "掃除して", hiragana: "そうじして" },
            "た形": { form: "掃除した", hiragana: "そうじした" },
            "ない形": { form: "掃除しない", hiragana: "そうじしない" },
            "た形否定": { form: "掃除しなかった", hiragana: "そうじしなかった" }
        }
    },
    {
        japanese: "運転します",
        hiragana: "うんてんします",
        chinese: "开车",
        conjugations: {
            "辞典形": { form: "運転する", hiragana: "うんてんする" },
            "ます形": { form: "運転します", hiragana: "うんてんします" },
            "て形": { form: "運転して", hiragana: "うんてんして" },
            "た形": { form: "運転した", hiragana: "うんてんした" },
            "ない形": { form: "運転しない", hiragana: "うんてんしない" },
            "た形否定": { form: "運転しなかった", hiragana: "うんてんしなかった" }
        }
    },
    {
        japanese: "旅行します",
        hiragana: "りょこうします",
        chinese: "旅行",
        conjugations: {
            "辞典形": { form: "旅行する", hiragana: "りょこうする" },
            "ます形": { form: "旅行します", hiragana: "りょこうします" },
            "て形": { form: "旅行して", hiragana: "りょこうして" },
            "た形": { form: "旅行した", hiragana: "りょこうした" },
            "ない形": { form: "旅行しない", hiragana: "りょこうしない" },
            "た形否定": { form: "旅行しなかった", hiragana: "りょこうしなかった" }
        }
    },
    {
        japanese: "買い物します",
        hiragana: "かいものします",
        chinese: "购物",
        conjugations: {
            "辞典形": { form: "買い物する", hiragana: "かいものする" },
            "ます形": { form: "買い物します", hiragana: "かいものします" },
            "て形": { form: "買い物して", hiragana: "かいものして" },
            "た形": { form: "買い物した", hiragana: "かいものした" },
            "ない形": { form: "買い物しない", hiragana: "かいものしない" },
            "た形否定": { form: "買い物しなかった", hiragana: "かいものしなかった" }
        }
    },
    {
        japanese: "散歩します",
        hiragana: "さんぽします",
        chinese: "散步",
        conjugations: {
            "辞典形": { form: "散歩する", hiragana: "さんぽする" },
            "ます形": { form: "散歩します", hiragana: "さんぽします" },
            "て形": { form: "散歩して", hiragana: "さんぽして" },
            "た形": { form: "散歩した", hiragana: "さんぽした" },
            "ない形": { form: "散歩しない", hiragana: "さんぽしない" },
            "た形否定": { form: "散歩しなかった", hiragana: "さんぽしなかった" }
        }
    },
    {
        japanese: "運動します",
        hiragana: "うんどうします",
        chinese: "运动",
        conjugations: {
            "辞典形": { form: "運動する", hiragana: "うんどうする" },
            "ます形": { form: "運動します", hiragana: "うんどうします" },
            "て形": { form: "運動して", hiragana: "うんどうして" },
            "た形": { form: "運動した", hiragana: "うんどうした" },
            "ない形": { form: "運動しない", hiragana: "うんどうしない" },
            "た形否定": { form: "運動しなかった", hiragana: "うんどうしなかった" }
        }
    },
    {
        japanese: "結婚します",
        hiragana: "けっこんします",
        chinese: "结婚",
        conjugations: {
            "辞典形": { form: "結婚する", hiragana: "けっこんする" },
            "ます形": { form: "結婚します", hiragana: "けっこんします" },
            "て形": { form: "結婚して", hiragana: "けっこんして" },
            "た形": { form: "結婚した", hiragana: "けっこんした" },
            "ない形": { form: "結婚しない", hiragana: "けっこんしない" },
            "た形否定": { form: "結婚しなかった", hiragana: "けっこんしなかった" }
        }
    },
    {
        japanese: "死にます",
        hiragana: "しにます",
        chinese: "死",
        conjugations: {
            "辞典形": { form: "死ぬ", hiragana: "しぬ" },
            "ます形": { form: "死にます", hiragana: "しにます" },
            "て形": { form: "死んで", hiragana: "しんで" },
            "た形": { form: "死んだ", hiragana: "しんだ" },
            "ない形": { form: "死なない", hiragana: "しなない" },
            "た形否定": { form: "死ななかった", hiragana: "しななかった" }
        }
    },
    {
        japanese: "生まれます",
        hiragana: "うまれます",
        chinese: "出生",
        conjugations: {
            "辞典形": { form: "生まれる", hiragana: "うまれる" },
            "ます形": { form: "生まれます", hiragana: "うまれます" },
            "て形": { form: "生まれて", hiragana: "うまれて" },
            "た形": { form: "生まれた", hiragana: "うまれた" },
            "ない形": { form: "生まれない", hiragana: "うまれない" },
            "た形否定": { form: "生まれなかった", hiragana: "うまれなかった" }
        }
    },
    {
        japanese: "住みます",
        hiragana: "すみます",
        chinese: "住",
        conjugations: {
            "辞典形": { form: "住む", hiragana: "すむ" },
            "ます形": { form: "住みます", hiragana: "すみます" },
            "て形": { form: "住んで", hiragana: "すんで" },
            "た形": { form: "住んだ", hiragana: "すんだ" },
            "ない形": { form: "住まない", hiragana: "すまない" },
            "た形否定": { form: "住まなかった", hiragana: "すまなかった" }
        }
    },
    {
        japanese: "引っ越します",
        hiragana: "ひっこします",
        chinese: "搬家",
        conjugations: {
            "辞典形": { form: "引っ越す", hiragana: "ひっこす" },
            "ます形": { form: "引っ越します", hiragana: "ひっこします" },
            "て形": { form: "引っ越して", hiragana: "ひっこして" },
            "た形": { form: "引っ越した", hiragana: "ひっこした" },
            "ない形": { form: "引っ越さない", hiragana: "ひっこさない" },
            "た形否定": { form: "引っ越さなかった", hiragana: "ひっこさなかった" }
        }
    },
    {
        japanese: "貸します",
        hiragana: "かします",
        chinese: "借出",
        conjugations: {
            "辞典形": { form: "貸す", hiragana: "かす" },
            "ます形": { form: "貸します", hiragana: "かします" },
            "て形": { form: "貸して", hiragana: "かして" },
            "た形": { form: "貸した", hiragana: "かした" },
            "ない形": { form: "貸さない", hiragana: "かさない" },
            "た形否定": { form: "貸さなかった", hiragana: "かさなかった" }
        }
    },
    {
        japanese: "借ります",
        hiragana: "かります",
        chinese: "借",
        conjugations: {
            "辞典形": { form: "借りる", hiragana: "かりる" },
            "ます形": { form: "借ります", hiragana: "かります" },
            "て形": { form: "借りて", hiragana: "かりて" },
            "た形": { form: "借りた", hiragana: "かりた" },
            "ない形": { form: "借りない", hiragana: "かりない" },
            "た形否定": { form: "借りなかった", hiragana: "かりなかった" }
        }
    },
    {
        japanese: "返します",
        hiragana: "かえします",
        chinese: "还",
        conjugations: {
            "辞典形": { form: "返す", hiragana: "かえす" },
            "ます形": { form: "返します", hiragana: "かえします" },
            "て形": { form: "返して", hiragana: "かえして" },
            "た形": { form: "返した", hiragana: "かえした" },
            "ない形": { form: "返さない", hiragana: "かえさない" },
            "た形否定": { form: "返さなかった", hiragana: "かえさなかった" }
        }
    },
    {
        japanese: "手伝います",
        hiragana: "てつだいます",
        chinese: "帮助",
        conjugations: {
            "辞典形": { form: "手伝う", hiragana: "てつだう" },
            "ます形": { form: "手伝います", hiragana: "てつだいます" },
            "て形": { form: "手伝って", hiragana: "てつだって" },
            "た形": { form: "手伝った", hiragana: "てつだった" },
            "ない形": { form: "手伝わない", hiragana: "てつだわない" },
            "た形否定": { form: "手伝わなかった", hiragana: "てつだわなかった" }
        }
    },
    {
        japanese: "紹介します",
        hiragana: "しょうかいします",
        chinese: "介绍",
        conjugations: {
            "辞典形": { form: "紹介する", hiragana: "しょうかいする" },
            "ます形": { form: "紹介します", hiragana: "しょうかいします" },
            "て形": { form: "紹介して", hiragana: "しょうかいして" },
            "た形": { form: "紹介した", hiragana: "しょうかいした" },
            "ない形": { form: "紹介しない", hiragana: "しょうかいしない" },
            "た形否定": { form: "紹介しなかった", hiragana: "しょうかいしなかった" }
        }
    },
    {
        japanese: "案内します",
        hiragana: "あんないします",
        chinese: "引导",
        conjugations: {
            "辞典形": { form: "案内する", hiragana: "あんないする" },
            "ます形": { form: "案内します", hiragana: "あんないします" },
            "て形": { form: "案内して", hiragana: "あんないして" },
            "た形": { form: "案内した", hiragana: "あんないした" },
            "ない形": { form: "案内しない", hiragana: "あんないしない" },
            "た形否定": { form: "案内しなかった", hiragana: "あんないしなかった" }
        }
    },
    {
        japanese: "説明します",
        hiragana: "せつめいします",
        chinese: "说明",
        conjugations: {
            "辞典形": { form: "説明する", hiragana: "せつめいする" },
            "ます形": { form: "説明します", hiragana: "せつめいします" },
            "て形": { form: "説明して", hiragana: "せつめいして" },
            "た形": { form: "説明した", hiragana: "せつめいした" },
            "ない形": { form: "説明しない", hiragana: "せつめいしない" },
            "た形否定": { form: "説明しなかった", hiragana: "せつめいしなかった" }
        }
    },
    {
        japanese: "質問します",
        hiragana: "しつもんします",
        chinese: "提问",
        conjugations: {
            "辞典形": { form: "質問する", hiragana: "しつもんする" },
            "ます形": { form: "質問します", hiragana: "しつもんします" },
            "て形": { form: "質問して", hiragana: "しつもんして" },
            "た形": { form: "質問した", hiragana: "しつもんした" },
            "ない形": { form: "質問しない", hiragana: "しつもんしない" },
            "た形否定": { form: "質問しなかった", hiragana: "しつもんしなかった" }
        }
    },
    {
        japanese: "答えます",
        hiragana: "こたえます",
        chinese: "回答",
        conjugations: {
            "辞典形": { form: "答える", hiragana: "こたえる" },
            "ます形": { form: "答えます", hiragana: "こたえます" },
            "て形": { form: "答えて", hiragana: "こたえて" },
            "た形": { form: "答えた", hiragana: "こたえた" },
            "ない形": { form: "答えない", hiragana: "こたえない" },
            "た形否定": { form: "答えなかった", hiragana: "こたえなかった" }
        }
    },
    {
        japanese: "相談します",
        hiragana: "そうだんします",
        chinese: "商量",
        conjugations: {
            "辞典形": { form: "相談する", hiragana: "そうだんする" },
            "ます形": { form: "相談します", hiragana: "そうだんします" },
            "て形": { form: "相談して", hiragana: "そうだんして" },
            "た形": { form: "相談した", hiragana: "そうだんした" },
            "ない形": { form: "相談しない", hiragana: "そうだんしない" },
            "た形否定": { form: "相談しなかった", hiragana: "そうだんしなかった" }
        }
    },
    {
        japanese: "約束します",
        hiragana: "やくそくします",
        chinese: "约定",
        conjugations: {
            "辞典形": { form: "約束する", hiragana: "やくそくする" },
            "ます形": { form: "約束します", hiragana: "やくそくします" },
            "て形": { form: "約束して", hiragana: "やくそくして" },
            "た形": { form: "約束した", hiragana: "やくそくした" },
            "ない形": { form: "約束しない", hiragana: "やくそくしない" },
            "た形否定": { form: "約束しなかった", hiragana: "やくそくしなかった" }
        }
    },
    {
        japanese: "心配します",
        hiragana: "しんぱいします",
        chinese: "担心",
        conjugations: {
            "辞典形": { form: "心配する", hiragana: "しんぱいする" },
            "ます形": { form: "心配します", hiragana: "しんぱいします" },
            "て形": { form: "心配して", hiragana: "しんぱいして" },
            "た形": { form: "心配した", hiragana: "しんぱいした" },
            "ない形": { form: "心配しない", hiragana: "しんぱいしない" },
            "た形否定": { form: "心配しなかった", hiragana: "しんぱいしなかった" }
        }
    },
    {
        japanese: "安心します",
        hiragana: "あんしんします",
        chinese: "安心",
        conjugations: {
            "辞典形": { form: "安心する", hiragana: "あんしんする" },
            "ます形": { form: "安心します", hiragana: "あんしんします" },
            "て形": { form: "安心して", hiragana: "あんしんして" },
            "た形": { form: "安心した", hiragana: "あんしんした" },
            "ない形": { form: "安心しない", hiragana: "あんしんしない" },
            "た形否定": { form: "安心しなかった", hiragana: "あんしんしなかった" }
        }
    },
    {
        japanese: "感謝します",
        hiragana: "かんしゃします",
        chinese: "感谢",
        conjugations: {
            "辞典形": { form: "感謝する", hiragana: "かんしゃする" },
            "ます形": { form: "感謝します", hiragana: "かんしゃします" },
            "て形": { form: "感謝して", hiragana: "かんしゃして" },
            "た形": { form: "感謝した", hiragana: "かんしゃした" },
            "ない形": { form: "感謝しない", hiragana: "かんしゃしない" },
            "た形否定": { form: "感謝しなかった", hiragana: "かんしゃしなかった" }
        }
    },
    {
        japanese: "謝ります",
        hiragana: "あやまります",
        chinese: "道歉",
        conjugations: {
            "辞典形": { form: "謝る", hiragana: "あやまる" },
            "ます形": { form: "謝ります", hiragana: "あやまります" },
            "て形": { form: "謝って", hiragana: "あやまって" },
            "た形": { form: "謝った", hiragana: "あやまった" },
            "ない形": { form: "謝らない", hiragana: "あやまらない" },
            "た形否定": { form: "謝らなかった", hiragana: "あやまらなかった" }
        }
    },
    {
        japanese: "怒ります",
        hiragana: "おこります",
        chinese: "生气",
        conjugations: {
            "辞典形": { form: "怒る", hiragana: "おこる" },
            "ます形": { form: "怒ります", hiragana: "おこります" },
            "て形": { form: "怒って", hiragana: "おこって" },
            "た形": { form: "怒った", hiragana: "おこった" },
            "ない形": { form: "怒らない", hiragana: "おこらない" },
            "た形否定": { form: "怒らなかった", hiragana: "おこらなかった" }
        }
    },
    {
        japanese: "笑います",
        hiragana: "わらいます",
        chinese: "笑",
        conjugations: {
            "辞典形": { form: "笑う", hiragana: "わらう" },
            "ます形": { form: "笑います", hiragana: "わらいます" },
            "て形": { form: "笑って", hiragana: "わらって" },
            "た形": { form: "笑った", hiragana: "わらった" },
            "ない形": { form: "笑わない", hiragana: "わらわない" },
            "た形否定": { form: "笑わなかった", hiragana: "わらわなかった" }
        }
    },
    {
        japanese: "泣きます",
        hiragana: "なきます",
        chinese: "哭",
        conjugations: {
            "辞典形": { form: "泣く", hiragana: "なく" },
            "ます形": { form: "泣きます", hiragana: "なきます" },
            "て形": { form: "泣いて", hiragana: "ないて" },
            "た形": { form: "泣いた", hiragana: "ないた" },
            "ない形": { form: "泣かない", hiragana: "なかない" },
            "た形否定": { form: "泣かなかった", hiragana: "なかなかった" }
        }
    },
    {
        japanese: "喜びます",
        hiragana: "よろこびます",
        chinese: "高兴",
        conjugations: {
            "辞典形": { form: "喜ぶ", hiragana: "よろこぶ" },
            "ます形": { form: "喜びます", hiragana: "よろこびます" },
            "て形": { form: "喜んで", hiragana: "よろこんで" },
            "た形": { form: "喜んだ", hiragana: "よろこんだ" },
            "ない形": { form: "喜ばない", hiragana: "よろこばない" },
            "た形否定": { form: "喜ばなかった", hiragana: "よろこばなかった" }
        }
    },
    {
        japanese: "驚きます",
        hiragana: "おどろきます",
        chinese: "惊讶",
        conjugations: {
            "辞典形": { form: "驚く", hiragana: "おどろく" },
            "ます形": { form: "驚きます", hiragana: "おどろきます" },
            "て形": { form: "驚いて", hiragana: "おどろいて" },
            "た形": { form: "驚いた", hiragana: "おどろいた" },
            "ない形": { form: "驚かない", hiragana: "おどろかない" },
            "た形否定": { form: "驚かなかった", hiragana: "おどろかなかった" }
        }
    },
    {
        japanese: "疲れます",
        hiragana: "つかれます",
        chinese: "累",
        conjugations: {
            "辞典形": { form: "疲れる", hiragana: "つかれる" },
            "ます形": { form: "疲れます", hiragana: "つかれます" },
            "て形": { form: "疲れて", hiragana: "つかれて" },
            "た形": { form: "疲れた", hiragana: "つかれた" },
            "ない形": { form: "疲れない", hiragana: "つかれない" },
            "た形否定": { form: "疲れなかった", hiragana: "つかれなかった" }
        }
    },
    {
        japanese: "病気になります",
        hiragana: "びょうきになります",
        chinese: "生病",
        conjugations: {
            "辞典形": { form: "病気になる", hiragana: "びょうきになる" },
            "ます形": { form: "病気になります", hiragana: "びょうきになります" },
            "て形": { form: "病気になって", hiragana: "びょうきになって" },
            "た形": { form: "病気になった", hiragana: "びょうきになった" },
            "ない形": { form: "病気にならない", hiragana: "びょうきにならない" },
            "た形否定": { form: "病気にならなかった", hiragana: "びょうきにならなかった" }
        }
    },
    {
        japanese: "治ります",
        hiragana: "なおります",
        chinese: "治愈",
        conjugations: {
            "辞典形": { form: "治る", hiragana: "なおる" },
            "ます形": { form: "治ります", hiragana: "なおります" },
            "て形": { form: "治って", hiragana: "なおって" },
            "た形": { form: "治った", hiragana: "なおった" },
            "ない形": { form: "治らない", hiragana: "なおらない" },
            "た形否定": { form: "治らなかった", hiragana: "なおらなかった" }
        }
    },
    {
        japanese: "痛みます",
        hiragana: "いたみます",
        chinese: "疼痛",
        conjugations: {
            "辞典形": { form: "痛む", hiragana: "いたむ" },
            "ます形": { form: "痛みます", hiragana: "いたみます" },
            "て形": { form: "痛んで", hiragana: "いたんで" },
            "た形": { form: "痛んだ", hiragana: "いたんだ" },
            "ない形": { form: "痛まない", hiragana: "いたまない" },
            "た形否定": { form: "痛まなかった", hiragana: "いたまなかった" }
        }
    },
    {
        japanese: "太ります",
        hiragana: "ふとります",
        chinese: "变胖",
        conjugations: {
            "辞典形": { form: "太る", hiragana: "ふとる" },
            "ます形": { form: "太ります", hiragana: "ふとります" },
            "て形": { form: "太って", hiragana: "ふとって" },
            "た形": { form: "太った", hiragana: "ふとった" },
            "ない形": { form: "太らない", hiragana: "ふとらない" },
            "た形否定": { form: "太らなかった", hiragana: "ふとらなかった" }
        }
    },
    {
        japanese: "痩せます",
        hiragana: "やせます",
        chinese: "变瘦",
        conjugations: {
            "辞典形": { form: "痩せる", hiragana: "やせる" },
            "ます形": { form: "痩せます", hiragana: "やせます" },
            "て形": { form: "痩せて", hiragana: "やせて" },
            "た形": { form: "痩せた", hiragana: "やせた" },
            "ない形": { form: "痩せない", hiragana: "やせない" },
            "た形否定": { form: "痩せなかった", hiragana: "やせなかった" }
        }
    },
    {
        japanese: "成長します",
        hiragana: "せいちょうします",
        chinese: "成长",
        conjugations: {
            "辞典形": { form: "成長する", hiragana: "せいちょうする" },
            "ます形": { form: "成長します", hiragana: "せいちょうします" },
            "て形": { form: "成長して", hiragana: "せいちょうして" },
            "た形": { form: "成長した", hiragana: "せいちょうした" },
            "ない形": { form: "成長しない", hiragana: "せいちょうしない" },
            "た形否定": { form: "成長しなかった", hiragana: "せいちょうしなかった" }
        }
    },
    {
        japanese: "変わります",
        hiragana: "かわります",
        chinese: "改变",
        conjugations: {
            "辞典形": { form: "変わる", hiragana: "かわる" },
            "ます形": { form: "変わります", hiragana: "かわります" },
            "て形": { form: "変わって", hiragana: "かわって" },
            "た形": { form: "変わった", hiragana: "かわった" },
            "ない形": { form: "変わらない", hiragana: "かわらない" },
            "た形否定": { form: "変わらなかった", hiragana: "かわらなかった" }
        }
    },
    {
        japanese: "始まります",
        hiragana: "はじまります",
        chinese: "开始",
        conjugations: {
            "辞典形": { form: "始まる", hiragana: "はじまる" },
            "ます形": { form: "始まります", hiragana: "はじまります" },
            "て形": { form: "始まって", hiragana: "はじまって" },
            "た形": { form: "始まった", hiragana: "はじまった" },
            "ない形": { form: "始まらない", hiragana: "はじまらない" },
            "た形否定": { form: "始まらなかった", hiragana: "はじまらなかった" }
        }
    },
    {
        japanese: "終わります",
        hiragana: "おわります",
        chinese: "结束",
        conjugations: {
            "辞典形": { form: "終わる", hiragana: "おわる" },
            "ます形": { form: "終わります", hiragana: "おわります" },
            "て形": { form: "終わって", hiragana: "おわって" },
            "た形": { form: "終わった", hiragana: "おわった" },
            "ない形": { form: "終わらない", hiragana: "おわらない" },
            "た形否定": { form: "終わらなかった", hiragana: "おわらなかった" }
        }
    },
    {
        japanese: "続きます",
        hiragana: "つづきます",
        chinese: "继续",
        conjugations: {
            "辞典形": { form: "続く", hiragana: "つづく" },
            "ます形": { form: "続きます", hiragana: "つづきます" },
            "て形": { form: "続いて", hiragana: "つづいて" },
            "た形": { form: "続いた", hiragana: "つづいた" },
            "ない形": { form: "続かない", hiragana: "つづかない" },
            "た形否定": { form: "続かなかった", hiragana: "つづかなかった" }
        }
    },
    {
        japanese: "止まります",
        hiragana: "とまります",
        chinese: "停止",
        conjugations: {
            "辞典形": { form: "止まる", hiragana: "とまる" },
            "ます形": { form: "止まります", hiragana: "とまります" },
            "て形": { form: "止まって", hiragana: "とまって" },
            "た形": { form: "止まった", hiragana: "とまった" },
            "ない形": { form: "止まらない", hiragana: "とまらない" },
            "た形否定": { form: "止まらなかった", hiragana: "とまらなかった" }
        }
    },
    {
        japanese: "動きます",
        hiragana: "うごきます",
        chinese: "移动",
        conjugations: {
            "辞典形": { form: "動く", hiragana: "うごく" },
            "ます形": { form: "動きます", hiragana: "うごきます" },
            "て形": { form: "動いて", hiragana: "うごいて" },
            "た形": { form: "動いた", hiragana: "うごいた" },
            "ない形": { form: "動かない", hiragana: "うごかない" },
            "た形否定": { form: "動かなかった", hiragana: "うごかなかった" }
        }
    }
];

// Application state
let currentWordIndex = 0;
let displayMode = 'sequential'; // 'sequential' or 'random'
let fontSize = 24;
let revealedForms = new Set();

// DOM elements
const japaneseWordEl = document.getElementById('japaneseWord');
const chineseMeaningEl = document.getElementById('chineseMeaning');
const conjugationSectionEl = document.getElementById('conjugationSection');
const prevBtnEl = document.getElementById('prevBtn');
const nextBtnEl = document.getElementById('nextBtn');
const settingsBtnEl = document.getElementById('settingsBtn');
const settingsModalEl = document.getElementById('settingsModal');
const closeBtnEl = document.getElementById('closeBtn');
const displayModeEl = document.getElementById('displayMode');
const fontSizeEl = document.getElementById('fontSize');
const fontSizeValueEl = document.getElementById('fontSizeValue');

// Utility functions
function hasKanji(text) {
    return /[\u4e00-\u9faf]/.test(text);
}

function generateRubyText(text, hiraganaReading) {
    if (!hasKanji(text)) {
        return text;
    }
    return `<ruby class="with-reading">${text}<rt>${hiraganaReading}</rt></ruby>`;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display functions
function displayCurrentWord() {
    const word = wordData[currentWordIndex];
    
    // Display Japanese word with hiragana reading
    japaneseWordEl.innerHTML = generateRubyText(word.japanese, word.hiragana);
    japaneseWordEl.style.fontSize = fontSize + 'px';
    
    // Display Chinese meaning
    chineseMeaningEl.textContent = word.chinese;
    
    // Create conjugation form tags
    conjugationSectionEl.innerHTML = '';
    revealedForms.clear();
    
    Object.entries(word.conjugations).forEach(([formName, formData]) => {
        const formTag = document.createElement('div');
        formTag.className = 'form-tag';
        formTag.innerHTML = `
            <span class="form-name">${formName}</span>
            <span class="answer">${generateRubyText(formData.form, formData.hiragana)}</span>
        `;
        
        formTag.addEventListener('click', () => {
            if (!revealedForms.has(formName)) {
                formTag.classList.add('revealed');
                revealedForms.add(formName);
            }
        });
        
        conjugationSectionEl.appendChild(formTag);
    });
}

function updateWordIndex(direction) {
    if (displayMode === 'sequential') {
        if (direction === 'next') {
            currentWordIndex = (currentWordIndex + 1) % wordData.length;
        } else {
            currentWordIndex = (currentWordIndex - 1 + wordData.length) % wordData.length;
        }
    } else {
        // Random mode
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * wordData.length);
        } while (newIndex === currentWordIndex && wordData.length > 1);
        currentWordIndex = newIndex;
    }
    displayCurrentWord();
}

// Settings functions
function openSettings() {
    settingsModalEl.style.display = 'flex';
    displayModeEl.value = displayMode;
    fontSizeEl.value = fontSize;
    fontSizeValueEl.textContent = fontSize + 'px';
}

function closeSettings() {
    settingsModalEl.style.display = 'none';
}

function updateDisplayMode() {
    displayMode = displayModeEl.value;
}

function updateFontSize() {
    fontSize = parseInt(fontSizeEl.value);
    fontSizeValueEl.textContent = fontSize + 'px';
    japaneseWordEl.style.fontSize = fontSize + 'px';
}

// Event listeners
prevBtnEl.addEventListener('click', () => updateWordIndex('prev'));
nextBtnEl.addEventListener('click', () => updateWordIndex('next'));
settingsBtnEl.addEventListener('click', openSettings);
closeBtnEl.addEventListener('click', closeSettings);
displayModeEl.addEventListener('change', updateDisplayMode);
fontSizeEl.addEventListener('input', updateFontSize);

// Close modal when clicking outside
settingsModalEl.addEventListener('click', (e) => {
    if (e.target === settingsModalEl) {
        closeSettings();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (settingsModalEl.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeSettings();
        }
        return;
    }
    
    switch (e.key) {
        case 'ArrowLeft':
            updateWordIndex('prev');
            break;
        case 'ArrowRight':
            updateWordIndex('next');
            break;
        case 'Escape':
            // Reset all revealed forms
            revealedForms.clear();
            document.querySelectorAll('.form-tag').forEach(tag => {
                tag.classList.remove('revealed');
            });
            break;
    }
});

// Initialize application
function init() {
    displayCurrentWord();
}

// Start the application
init();