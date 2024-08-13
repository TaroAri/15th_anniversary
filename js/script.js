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

//フェードイン
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});