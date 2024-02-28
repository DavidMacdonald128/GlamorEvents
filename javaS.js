function showSideBar(){
    var side1=document.querySelector('.navigation');
    side1.style.display='flex';
    var side2=document.querySelector('.search_bar');
    side2.style.marginRight='200px';
    var side3=document.querySelector('.hamburger_icon_2');
    side3.style.display='none';
}
function closeSideBar(){
    var side4=document.querySelector('.navigation');
    side4.style.display='none';
    var side5=document.querySelector('.search_bar');
    side5.style.marginRight='20px';
    var side6=document.querySelector('.hamburger_icon_2');
    side6.style.display='flex';
}
var services_click_count = 0;
function showServices(){
    services_click_count++;
    if (window.innerWidth <= 1024 && services_click_count % 2 !== 0){
        var show1 = document.querySelector('.dropdown-menu');
        show1.style.display= 'block';
        var show2 = document.querySelector('.dropdown');
        show2.style.height = '160px';
        var show3 = document.querySelector('#chevron_icon');
        show3.style.transform = 'rotateZ(180deg)';
    }
    else if(window.innerWidth <= 1024 && services_click_count % 2 === 0){
        var show4 = document.querySelector('.dropdown-menu');
        show4.style.display= 'none';
        var show5 = document.querySelector('.dropdown');
        show5.style.height = '40px';
        var show6 = document.querySelector('#chevron_icon');
        show6.style.transform = 'none';
    }
}
function weddingRedirect(){
    window.location.href = "wedding.html";
}
function corporateRedirect(){
    window.location.href = "corporate.html";
}
function privateRedirect(){
    window.location.href = "private.html"
}
var faq_count1 = 0;
function showFAQans1(){
    faq_count1++;
    if(faq_count1 % 2 !==0){
        var s1 = document.querySelector('#plus_sign1');
        s1.style.transform = 'rotateZ(135deg)';
        var s2 = document.querySelector('#faq_ans1');
        s2.style.display = 'flex';
    }
    else{
        var s3 = document.querySelector('#plus_sign1');
        s3.style.transform = 'rotateZ(0deg)';
        var s4 = document.querySelector('#faq_ans1');
        s4.style.display = 'none';
    }
}
var faq_count2 = 0;
function showFAQans2(){
    faq_count2++;
    if(faq_count2 % 2 !==0){
        var h1 = document.querySelector('#plus_sign2');
        h1.style.transform = 'rotateZ(135deg)';
        var h2 = document.querySelector('#faq_ans2');
        h2.style.display = 'flex';
    }
    else{
        var h3 = document.querySelector('#plus_sign2');
        h3.style.transform = 'rotateZ(0deg)';
        var h4 = document.querySelector('#faq_ans2');
        h4.style.display = 'none';
    }
}
var faq_count3 = 0;
function showFAQans3(){
    faq_count3++;
    if(faq_count3 % 2 !==0){
        var o1 = document.querySelector('#plus_sign3');
        o1.style.transform = 'rotateZ(135deg)';
        var o2 = document.querySelector('#faq_ans3');
        o2.style.display = 'flex';
    }
    else{
        var o3 = document.querySelector('#plus_sign3');
        o3.style.transform = 'rotateZ(0deg)';
        var o4 = document.querySelector('#faq_ans3');
        o4.style.display = 'none';
    }
}
var faq_count4 = 0;
function showFAQans4(){
    faq_count4++;
    if(faq_count4 % 2 !==0){
        var w1 = document.querySelector('#plus_sign4');
        w1.style.transform = 'rotateZ(135deg)';
        var w2 = document.querySelector('#faq_ans4');
        w2.style.display = 'flex';
    }
    else{
        var w3 = document.querySelector('#plus_sign4');
        w3.style.transform = 'rotateZ(0deg)';
        var w4 = document.querySelector('#faq_ans4');
        w4.style.display = 'none';
    }
}
var search_bar_count=0;
function showSearchBar(){
    search_bar_count++;
    if (window.innerWidth <= 460 && search_bar_count % 2 !== 0){
        var search1 = document.querySelector('.search_bar2');
        search1.style.display= 'flex';
    }
    else if(window.innerWidth <= 460 && search_bar_count % 2 === 0){
        var search4 = document.querySelector('.search_bar2');
        search4.style.display= 'none';
    }
}