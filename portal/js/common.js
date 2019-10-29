function pinyinRead(pinyin) {




    //var filePath ='https://hanyu-word-pinyin-short.cdn.bcebos.com/' + pinyin + '.mp3';
     var filePath ='http://appcdn.fanyi.baidu.com/zhdict/mp3/' + pinyin + '.mp3';
    audioPlay(filePath);
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