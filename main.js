function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ByU0gxt0y/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error)
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b+")";

        img =  document.getElementById('ear');
        img1 =  document.getElementById('cat');
        img2 =  document.getElementById('dog');
        img3 =  document.getElementById('bird');
        img4 =  document.getElementById('cow');
        

        if (results[0].label == "Cat meowing") {
        img.src = 'cat.jpg';
        } else if (results[0].label == "Dog barking") {
        img.src = 'dog.jpg';
        } else if (results[0].label == "Cow") {
        img.src = 'cow.jpg';
        } else if (results[0].label == "Bird") {
        img.src = 'bird.jpg';
        } else {
        img.src = 'ear.jpg';

        }
    }
}
