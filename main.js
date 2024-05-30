//Esta linha define uma variável SpeechRecognition e a atribui ao objeto webkitSpeechRecognition,
// que é uma interface da API de reconhecimento de voz no navegador Google Chrome.
var SpeechRecognition = window.webkitSpeechRecognition;
  
//Aqui, criamos uma nova instância do objeto SpeechRecognition e a armazenamos na variável 
//recognition. Esta instância será usada para realizar o reconhecimento de voz.
var recognition = new SpeechRecognition();

//Limpa o conteúdo do elemento com id textbox
function start()
{
    //Inicia o reconhecimento de voz chamando o método start da instância recognition.
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

    //Exibe o evento completo no console para fins de depuração.
 console.log(event); 

 //Extrai o texto reconhecido do primeiro resultado.
var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
