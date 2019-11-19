String.prototype.format = function () {
    var values = arguments;
    return this.replace(/\{(\d+)\}/g, function (match, index) {
        if (values.length > index) {
            return values[index];
        } else {
            return "";
        }
    });
};


function pinyinRead(pinyin) {
    var filePath ='https://hanyu-word-pinyin-short.cdn.bcebos.com/' + pinyin + '.mp3';
    // var filePath ='http://appcdn.fanyi.baidu.com/zhdict/mp3/' + pinyin + '.mp3';
    audioPlay(filePath);
}

/**
 *
 * @param word
 * @param way  1 有道   2 百度
 */
function englishRead(word,way,speed,lan){
    if(!word || word.length ==0){
        return;
    }

    // http://tts.youdao.com/fanyivoice?word={0}&le=eng
    var wayUrl = {"yd":"http://dict.youdao.com/dictvoice?audio={0}&type={2}",
    "bd":"https://fanyi.baidu.com/gettts?lan={2}&text={0}&spd={1}&source=web"}



    //  lan [ uk   en ]
    // source [ alading  web]

    if(!way){
        way = "bd";
    }

    if(!speed){
        speed = 2;
    }



    if(!lan){
        lan = "en";
    }

    if(way=='yd'){
        if(lan=="en"){
            lan = "2";
        }else{
            lan = "1";
        }
    }

    var url = wayUrl[way];
    url = url.format(word,speed,lan);

    // url = url.format({word:word});


    audioPlay(url);
}



function soundPlay(path) {
    var filePath ="./audio/"+path;
    audioPlay(filePath);
}



function audioPlay(filePath){
    var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
    var sss = '<source id="tts_source_id" src="'+filePath+'">';
    var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
    var au2 = '</audio>';

    var ttsAudio = document.getElementById('tts_autio_id');
    if(ttsAudio){
        ttsAudio.remove();
    }
    $("body").prepend(au1+sss+eee+au2);

    ttsAudio = document.getElementById('tts_autio_id');
    ttsAudio.play();
}


function moduleLoad(url) {
    $.get(url, function (result) {
        var html = $(result);
        var __templates = html;
        $("[slot]").each(function () {
            var id = $(this).attr('slot');
            var body = $(__templates).find('#' + id).html();
            $(this).html(body);
        });
    });
}




// function autoCreateCompent(url){

//  $.get(url, function (result) {
//         var html = $(result);
//         var __templates = html;

//         $(__templates).find("templates>template").each(function(){
//             var $this = $(this);
//             var id =$this.attr("id");
//             var body = $this.html();
//             Vue.component("hello-component",{
//                 props:["message"],
//                 template :"<div ><h1>组件定义之全局组件</h1><h4>{{message}}</h4></div>"
//             });
//         })

//     });

// }

// autoCreateCompent("../template/page-template.html");