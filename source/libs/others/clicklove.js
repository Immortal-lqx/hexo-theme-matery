/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤","今天又是秃头的一天","上班996","下班ICU","我爱学习","学习使我快乐","瓜大一入深似海","从此妹子是路人"，"一朝误入此门中","从此红尘了如空","说好一起做单身狗","你却偷偷撩了猫","请不要叫我单身狗","我的代号是孤狼","单身可撩，圈小人好","衣带渐宽终不悔","Bug寻得人憔悴","十年生死两茫茫，Debug，欲断肠","千行代码，Bug何处藏","纵使上线又怎样，朝令改，夕断肠","领导总有新想法，天天改，日日忙","相顾无言，惟有泪千行","每晚灯火阑珊处，夜难寐，加班狂","你说烟雨微芒，兰亭远望","后来轻揽婆娑，深遮霓裳","你说春光烂漫，绿袖红香","后来内掩西楼，静立卿旁","你说软风轻拂，醉卧思量","后来紧掩门窗，漫帐成殇","你说情丝柔肠，如何相忘","我却眼波微转，兀自成霜","世界上最远的距离","是我在if里你在else里","虽然经常一起出现","但却永不结伴执行","0 error 0 warning","好了，没有了","真的没有了~~(>_<)~~","你不讲武德w(ﾟДﾟ)w","来骗，来偷袭！","我要复读了！！！","单身程序狗解决了一个技术难题后没有妹子可以炫耀或夸一下自己怎么办","现在你明白了吧，为什么那么多程序员要写技术博客","复读开始○( ＾皿＾)っ");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
