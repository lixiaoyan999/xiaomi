/* 加载中 */
	let flow = document.getElementsByClassName('flow');
	window.onscroll = function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop||document.scrollY||window.pageXOffset;
		for(var i = 0;i < flow.length;i++){
			var ftop = flow[i].offsetTop - 200;
			var img = flow[i].getElementsByTagName('img');
			if(top > ftop){
				for(var j = 0;j < img.length;j++){
					var dizhi = img[j].getAttribute('arrt');
					img[j].src = dizhi;
				}
			}
		}	
	}
	/*1.初始效果(css)
		选项卡大盒子	.ss-dwdw height:0
		items   		.ss-dw2/.ul display:none
		2.获取所有的操作元素
		* 标题大盒子： .logo2 1
		* 选项卡大盒子 	.ss-dwdw 1
		* 标题  .sea 7
		* items .ss-dw2 /. ul 7
	3.标题大盒子  onmouseover
		 * 选项卡大盒子 height
	4.遍历  标题  .nav
		 * items display
	5.没有选项卡的标题   onmouseover
		 * 选项卡大盒子 height:0;*/
	let box = document.getElementsByClassName('logo2')[0];
	let box1 = document.getElementsByClassName('ss-dwdw')[0];
	let nav = document.getElementsByClassName('sea');
	let nav1 = document.getElementsByClassName('sea1');
	let item = box1.getElementsByClassName('ss-dw2');
	box.onmouseover = function(){
		box1.style.height = 229 + 'px';
	}
	box.onmouseout = function(){
		box1.style.height = 0;
	}
	for(let i = 0;i < nav.length;i++){
		nav[i].onmouseover = function(){
			for(let j = 0;j < item.length;j++){
				item[j].style.display = 'none';
			}
			item[i].style.display = 'block';
		}
	}
	for(let i = 0;i < nav1.length;i++){
		nav1[i].onmousemove = function(){
			box1.style.height = 0;
		}
	}
/* 侧拉框选项卡 */
	// 1.初始效果(css)
	// 2.获取所有的操作元素
	// 	* 标题：
	// 	* 子元素
	// 3.遍历标题
	// 	* 给标题添加 onouseover事件
	//		* 选项卡
	//			* display none/block
	let title = document.getElementsByClassName('blzi1');
	let con = document.getElementsByClassName('blh1');
	for(let i = 0;i < title.length;i++){
		title[i].onmouseover = function(){
			for(j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
			con[i].classList.add('con-active');
			title[i].onmouseout = function(){
			for(j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
			}
		}
	}
/* banner轮播图 */
	/*	1.初始化：css
		 * 第一张显示  opacity:0
		 * 其余：opacity:1
	2.获取元素：
		 * 图片 brtu1
		 * 大盒子 bright 1
		 * 轮播点 yuan1
		 * 左右按钮  1 1
	3.让图片自动播放
		 * 开启时间函数  * setInterval()
		 	* 控制当前显示图片的下标 now
			 * 遍历图片   显示完以后在拉回初始化状态
			 * 下标自增,now++	
	4.停止播放
		 鼠标移入    大盒子
		 clear
	 5.通过轮播点控制图片
	 	 得到每一个轮播点
	 	 	 * for  forEach
	 	 	 添加鼠标移入   on  只能添加一次
	 	 	 addEventListener('click',function)   添加多次   
	 6.左右切换
	 	 * 右箭头 now++
	 	 	 if(now == tu.length)   now = 0
	 	 * 左箭头  now--
	 	 	 if(now < 0) now = tu.length - 1		*/												 	 	 												
	let tu = document.querySelectorAll('.brtu1');
	let yuan = document.querySelectorAll('.yuan1');
	let ban_box = document.getElementsByClassName('banner')[0];
	let next = document.querySelector('.banright');
	let pre = document.querySelector('.banleft');
	let now = 0;
	let t = setInterval(move,2000);
	function move(type){
		type = type || 'right';
		if(type == 'right'){
			now++;
			if(now == tu.length){
				now = 0;
			};
		}
		if(type == 'left'){
			now--;
			if (now < 0){
				now  = tu.length - 1;
			}
		}
		tu.forEach(function(ele,index){
			ele.style.opacity = 0;
			yuan[index].style.backgroundColor = '#838383';
		})
		tu[now].style.opacity = 1;
		yuan[now].style.backgroundColor = '#fff';
	}
	ban_box.onmouseover = function(){
		clearInterval(t);
	}
	ban_box.onmouseout = function(){
		t = setInterval(move,2000);
	}
	yuan.forEach(function(eled,index1){
		eled.addEventListener('click',function(){
			tu.forEach(function(ele,index){
			ele.style.opacity = 0;
			yuan[index].style.backgroundColor = '#838383';
			})
			tu[index1].style.opacity = 1;
			this.style.backgroundColor = '#fff';
			now = index1;
		})
	})
	next.onclick = function(){
		move('right');
	}
	pre.onclick = function(){
		move('left');
	}
/* 家电 */
	// 1.初始化效果（css）
	// 	 * jdright2 display:none
	// 2.获取所有元素：
	// 	标题(jdnav)：jd1
	// 	选项卡(jd_card): jdright2
	// 3.遍历jd1
	// 	jd1添加onmouseover事件
	// 		jd_card: display none/block
	let jdnav = document.getElementsByClassName('jd1');
	let jd_card = document.getElementsByClassName('jdright');
	for(let i = 0;i < jdnav.length;i++){
		jdnav[i].onmouseover = function(){
			for(let j = 0;j < jd_card.length;j++){
				jd_card[j].classList.remove('jd-active');
			}
			jd_card[i].classList.add('jd-active');
			jdnav[i].onmouseout = function(){
				for(let j = 0;j < jd_card.length;j++){
					jd_card[j].classList.add('jd-active');
				}
			}
		}
	}
//智能
	let znnav = document.getElementsByClassName('zn1');
	let zn_card = document.getElementsByClassName('znright');
	for(let i = 0;i < znnav.length;i++){
		znnav[i].onmouseover = function(){
			for(let j = 0;j < zn_card.length;j++){
				zn_card[j].classList.remove('zn-active');
			}
			zn_card[i].classList.add('zn-active');
			znnav[i].onmouseout = function(){
				for(let j = 0;j < zn_card.length;j++){
					zn_card[j].classList.add('zn-active');
				}
			}
		}
	}
//搭配
	let dpnav = document.getElementsByClassName('dp1');
	let dp_card = document.getElementsByClassName('dpright');
	for(let i = 0;i < dpnav.length;i++){
		dpnav[i].onmouseover = function(){
			for(let j = 0;j < dp_card.length;j++){
				dp_card[j].classList.remove('dp-active');
			}
			dp_card[i].classList.add('dp-active');
			dpnav[i].onmouseout = function(){
				for(let j = 0;j < dp_card.length;j++){
					dp_card[j].classList.add('dp-active');
				}
			}
		}
	}
//配件
	let pjnav = document.getElementsByClassName('pj1');
	let pj_card = document.getElementsByClassName('pjright');
	for(let i = 0;i < pjnav.length;i++){
		pjnav[i].onmouseover = function(){
			for(let j = 0;j < pj_card.length;j++){
				pj_card[j].classList.remove('pj-active');
			}
			pj_card[i].classList.add('pj-active');
			pjnav[i].onmouseout = function(){
				for(let j = 0;j < pj_card.length;j++){
					pj_card[j].classList.add('pj-active');
				}
			}
		}
	}
//周边
	let zbnav = document.getElementsByClassName('zb1');
	let zb_card = document.getElementsByClassName('zbright');
	for(let i = 0;i < zbnav.length;i++){
		zbnav[i].onmouseover = function(){
			for(let j = 0;j < zb_card.length;j++){
				zb_card[j].classList.remove('zb-active');
			}
			zb_card[i].classList.add('zb-active');
			zbnav[i].onmouseout = function(){
				for(let j = 0;j < zb_card.length;j++){
					zb_card[j].classList.add('zb-active');
				}
			}
		}
	}
