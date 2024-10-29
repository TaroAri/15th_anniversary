//ナビゲーションクリック時のスクロール処理
$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

$('.scroll-to-contact').click(function () {
	var elmHash = '#contact'; // スクロールしたいエリアのid
	var pos = $(elmHash).offset().top; // idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); // 取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
});


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	if ($("body").css("overflow") === "hidden") {
		// もしoverflowがhiddenなら、bodyのスタイルを元に戻す
		$("body").css({ height: "", overflow: "" });
  
	} else {
		// そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
		$("body").css({ height: "100%", overflow: "hidden" });
	}

	$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
		$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
		$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
		$("body").css({ height: "", overflow: "" });
	});
});

//ロード時のモーダル表示処理
$(function(){
	$('#layer_board_area').layerBoard({
	delayTime: 100, //表示までの待ち時間
	fadeTime : 300, //表示開始から表示しきるまでの時間
	limitMin : 0, //何分経過後に再度表示するか/分（0で再表示なし）
	easing: 'linear', //イージング
	limitCookie : 0 , //cookie保存期間/日（0で開くたび毎回表示される）
	countCookie : 1000 //何回目のアクセスまで適用するか(cookie保存期間でリセット)
	});
	})

