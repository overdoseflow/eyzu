// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "“İnternette yazı yazarken tamamı büyük harflerden oluşan cümleler kullanmamalıyız. Çünkü ……………………………. anlamına gelmektedir.” Cümlesinde boş bırakılan yere aşağıdakilerden hangisinin gelmesi uygundur?",
        imgSrc : "a/1.jfif",
        choiceA : "Bağırmak",
        choiceB : "Küfür Etmek",
        choiceC : "Dalga Geçmek",
        choiceD : "Büyüklenmek",
        correct : "A"
    },{
        question : "Doğru ile yanlışı, haklı ile haksızı, iyi ile kötüyü, adil ile adil olmayanı ayırt etmek, bunun sonucunda da doğru, haklı, iyi ve adil olduğuna inandığımız şeyleri yapmaya ne denir?",
        imgSrc : "a/2.jfif",
        choiceA : "Etik",
        choiceB : "Siber Zorbalık",
        choiceC : "Telif Hakkı",
        choiceD :"Töre",
        correct : "A"
    },{
        question : "Aşağıdakilerden hangisini etik olmayan davranışlar arasında sayamayız?",
        imgSrc : "a/3.jfif",
        choiceA : "İnterneti insanlara zarar vermek amacıyla kullanmak.",
        choiceB : "Proje ödevimizi hazırlarken tüm bilgiyi internet sitelerinden almak.",
        choiceC : "Arkadaşımızın çektiği fotoğrafı internette kendimizin gibi göstermek.",
        choiceD :"Yaptığımız ödevleri başkalarına fikir vermek için internette paylaşmak",
        correct : "D"
    }
    ,{
        question : " Bilge internette bulduğu bir ödevi çıktı alarak kendi ödevi gibi öğretmenine götürmüştür. Bilgenin ihlal ettiği etik kural aşağıdakilerden hangisidir?",
        imgSrc : "a/4.jfif",
        choiceA : "Arkadaşımızın yalnızca bizimle paylaştığı özel bilgilerini internette paylaşmak.",
        choiceB : "Kişisel verileri izinsiz kopyalamak ve dağıtmak.",
        choiceC : "Sahte içerik hazırlayarak kullanıcıları yanıltmak.",
        choiceD :"Proje ödevimizi hazırlarken tüm bilgiyi internet sitelerinden almak.",
        correct : "B"
    }
    ,{
        question : "Ali yeni geliştirdiği bir virüs sayesinde bilgisayarları bozarak çalışmaz hale getirebilmektedir. Ali'nin ihlal ettiği etik kural aşağıdakilerden hangisidir?",
        imgSrc : "a/5.jfif",
        choiceA : "Parasını ödemediğimiz yazılımları kopyalayıp kendi malımız gibi kullanmamalıyız.",
        choiceB : "İnternet'i, insanlara zarar vermek için kullanmamalıyız.",
        choiceC : "İletişim sürecinde kullandığımız dilin doğuracağı sonuçları önceden düşünmeliyiz.",
        choiceD :"Başkalarının gizli ve kişisel dosyalarına İnternet yoluyla ulaşmamalıyız.",
        correct : "B"
    },{
        question : "Ecrin internette bir haber okumuş habere göre tüm öğrencilere aylık 1000 tl para verileceğini öğrenmiş. Tüm arkadaşlarına bu haberin gerçek olduğunu iddia etmiştir. Ecrin'in ihlal ettiği etik kural aşağıdakilerden hangisidir?",
        imgSrc : "a/6.jpg",
        choiceA : "Parasını ödemediğimiz yazılımları kopyalayıp kendi malımız gibi kullanmamalıyız.",
        choiceB : "Başkalarının elektronik iletişim kaynaklarını izinsiz kullanmamalıyız.",
        choiceC : "İnternet'i, insanlara zarar vermek için kullanmamalıyız.",
        choiceD :"Bilgilerin doğruluğuna tam olarak emin olmadan bilgileri savunmamalıyız.",
        correct : "D"
    },{
        question : "Can yeni çıkmış bir oyunu internetten indirip crack yaparak ücretsiz oynamıştır.Can'ın ihlal ettiği etik kural aşağıdakilerden hangisidir?",
        imgSrc : "a/7.jfif",
        choiceA : "İnternet'i, insanlara zarar vermek için kullanmamalıyız.",
        choiceB : "Parasını ödemediğimiz yazılımları kopyalayıp kendi malımız gibi kullanmamalıyız.",
        choiceC : "Bilgilerin doğruluğuna tam olarak emin olmadan bilgileri savunmamalıyız.",
        choiceD :"Başkalarının elektronik iletişim kaynaklarını izinsiz kullanmamalıyız.",
        correct : "B"
    },{
        question : "Aşağıda bazı öğrenciler fikirlerini beyan etmişlerdir. Hangi öğrenci etik bir fikir beyan etmiştir?",
        imgSrc : "a/8.png",
        choiceA : "Ayşe: ”Başkalarının dosyalarını izinsiz kullanmam.”",
        choiceB : "Kamil: ”İnternette gördüğüm her şeyi istediğim gibi kullanabilirim.”",
        choiceC : "Zeynep: “Başkalarının fotoğrafları ile hesap açıp herkesi kandırabilirim.”",
        choiceD :"Ali: ”İnternette hakaret edebilirim, karşımdaki beni bulamaz.”",
        correct : "A"
    },{
        question : "Aşağıdakilerden hangisi doğru bir davranıştır?",
        imgSrc : "a/9.jfif",
        choiceA : "Yeni tanıştığınız kişilerden aldığınız mesajları ailenize göstermeden ve ailenizin onayını almadan onlarla sohbet edin.",
        choiceB : "Aileniz yanınızda olmadan ve onaylamadan internette tanıştığınız kimseyle buluşmayın.",
        choiceC : "Eğer bazı kişilerin çocuklara söylenmemesi gereken bir şey söylediğine rastlarsanız sizde ona aynısını söyleyin. ",
        choiceD :"Rumuz (Takma İsim) olarak tartışma ya da hakaret içeren isimler kullanmanızda hiçbir sakınca yoktur.",
        correct : "B"
    }
    ,{
        question : " Aşağıdakilerden hangisi yanlış bir davranıştır?",
        imgSrc : "a/10.jpg",
        choiceA : "Sadece şaka yapıyor olsanız bile kimseyi korkutmayın ya da tehdit etmeyin.",
        choiceB : "Ailenizle konuşmadan İnternet aracılığıyla sorulan sorulara cevap vermeyin. Hiçbir formu doldurmayın ya da hiçbir yarışmaya katılmayın.",
        choiceC : "Eğer İnternette tanıştığınız birisi size herhangi bir şey gönderirse hemen kabul edin.",
        choiceD :"Bazı insanların kötü niyetli olabileceklerini unutmayın. Bu nedenle İnternette tanıştığınız kişileri mutlaka ailenize söyleyin.",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















