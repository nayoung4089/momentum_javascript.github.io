const novels = [{
    novel: "새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리었다. 이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김 첨지에게는 오래간만에도 닥친 운수 좋은 날이었다.",
    title: "운수 좋은 날 - 현진건",
},
{
    novel: "여름장이란 애시당초에 글러서 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌려 놓은 전시장 밑으로 등줄기를 훅훅 볶는다.",
    title: "메밀꽃 필 무렵 - 이효석",
},
{
    novel: "얘, 봄감자가 맛있단다. 느 집엔 이거 없지?",
    title: "동백꽃 - 김유정",
},
{
    novel: "윤애 날 믿어줘, 알몸으로 날 믿어줘",
    title: "광장 - 최인훈",
},
{
    novel: "사람들은 아버지를 난장이라고 불렀다.",
    title: "난장이가 쏘아올린 작은 공 - 조세희",
},
{
    novel: "언제 떠올랐는지 모를 그믐달이 동녘 하늘에 비스듬히 걸려 있었다.",
    title: "태백산맥 - 조정래",
},
{
    novel: "아빠는 멍텅구리입니다.",
    title: "가시고기 - 조창인",
},
{
    novel: "엄마를 잃어버린지 일주일째다.",
    title: "엄마를 부탁해 - 신경숙",
},
{
    novel: "나는 내 아버지의 사형 집행인이었다.",
    title: "7년의 밤 - 정유정",
},
{
    novel: "그다지 오래되지 않은 옛날, 라 만차 지방의 이름도 기억나지 않는 어느 마을에서 선반에 창과 낡은 방패를 두고, 야윈 말과 경주를 위한 사냥개를 가진 신사가 살고 있었다",
    title: "돈키호테 - 미겔 데 세르반테스",
},
{
    novel: "꽤 재산을 가진 미혼남이 틀림없이 아내를 원하리라는 것은 널리 인정받는 진리다.",
    title: "오만과 편견 -  제인 오스틴",
},
{
    novel: "톰 소여의 모험이라는 제목의 책을 읽지 않고서는 나에 대해서 모를 거야, 하지만 그건 상관없어. 그 책은 마크 트웨인 선생이 쓴 책인데 다 맞는 말이야, 거의.",
    title: "허클베리 핀의 모험 - 마크 트웨인",
},
{
    novel: "어느 날 아침 그레고르 잠자가 편치 않은 꿈에서 깨어났을 때 그는 자신이 침대 속에서 한 마리의 엄청나게 큰 갑충으로 변해 있다는 걸 깨달았다.",
    title: "변신 - 프란츠 카프카",
},
{
    novel: "모든 아이들은 자란다. 한 사람만 빼고.",
    title: "피터팬 - 제임스 M. 배리",
},
{
    novel: '지금보다 더 어리고 쉽게 상처받던 시절, 아버지는 내가 계속 마음에 새기고 있는 충고 한마디를 해주셨다. "언제든 남을 비판하려거든 모든 세상 사람들이 네가 있던 유리한 위치에 놓여있지 않았다는 것만 기억해라."',
    title: "위대한 개츠비 - 프랜시스 스콧 피츠제럴드",
},
{
    novel: "오늘, 엄마가 죽었다. 아니 어쩌면 어제. 잘 모르겠다.",
    title: "이방인 - 알베르 카뮈",
},
{
    novel: "4월의 맑고 쌀쌀한 어느 날, 시계가 13번 울렸다.",
    title: "1984 - 조지 오웰",
},
{
    novel: "모든 동물들은 평등하다. 하지만 어떤 동물들은 다른 동물들보다 더욱 평등하다.",
    title: "동물농장 - 조지 오웰",
},
{
    novel: "그는 멕시코 만류에서 홀로 돛단배를 타고 고기잡이를 하는 노인이었다. 팔십하고도 나흘이 지나도록 그는 고기를 한 마리도 잡지 못했다.",
    title: "노인과 바다 - 어니스트 헤밍웨이",
},
{
    novel: "새는 알에서 나오기 위해 투쟁한다. 알은 새의 세계이다. 누구든지 태어나려고 하는 자는 하나의 세계를 파괴하지 않으면 안 된다.",
    title: "데미안 - 헤르만 헤세",
},
];
const novel = document.querySelector("#novel span:first-child");
const title = document.querySelector("#novel span:last-child");
// 같은 span 중 첫번째 두번째를 가르기 위해서는 first/ last child로 지정해주면 됨

// 랜덤으로 소설 보여주기 //

const num = Math.floor(Math.random()*novels.length); // novels.length: 전체 몇 개인지: 20
console.log(novels[num]);
novel.innerText = novels[num].novel;
title.innerText = novels[num].title;