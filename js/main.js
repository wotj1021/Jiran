$(document).ready(function(){
	var mainBtn = $('.gnb>ul>li>a');   //메인 메뉴를 변수로


/*데스크탑, 모바일 공통-메인메뉴를 누르면 서브부분이 내려옴*/
	mainBtn.click(function(){
		$('.sub_wrap').slideUp();   //클릭하면 무조건 전체 서브메뉴를 올라가게 한다

		if($(this).hasClass('active') == false){     //클릭한메뉴를 또 클릭한 경우가 아님			
			
			$(this).siblings('.sub_wrap').slideDown();  //같은 형제레벨의 .sub_wrap을 보이게 한다.
			$(this).addClass('active');									//active클라스를 추가한다(펼쳐있다는것을 나타냄)
			$(this).parent('li').addClass('on'); 

		} 
			else {											//클릭한(서브메뉴가 펼쳐져있는) 메뉴를 또 클릭함		
			$(this).removeClass('active');  //클라스 삭제
			$(this).parent('li').removeClass('on'); 
		}
		
	});
		/* 메인메뉴를 클릭하면 서브메뉴가 내려옴(단순)
			mainBtn.click(function(){
				$('.sub_wrap').slideUp();
				$(this).siblings('.sub_wrap').slideDown();
			});
	   */





/*모바일 서브메뉴를 누르면 서브,서브가 나옴*/
		$('.subhas > a').click(function(){
			if($(this).hasClass('active2')== false){
				$(this).siblings('ul').slideDown();
				$(this).addClass('active2');   
				$(this).parent('li').addClass('on');     //서브메뉴 옆의 회색 +표시를 주황색 이미지로 바꾼다 
			}
			else{
				$(this).siblings('ul').slideUp();
				$(this).removeClass('active2');   
				$(this).parent('li').removeClass('on'); 
			}
		});


//모바일 - 햄버거버튼을 누르면 왼쪽에 숨어있던 gnb가 튀어나온다
$('.btn_all').click(function(){
	console.log('btn_all 클릭!');
	$('.gnb').animate({left:0},500);
});


$('.btn_gnbClose').click(function(){
	$('.gnb').animate({left:'-320px'},500);
});
	

  });      