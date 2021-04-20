
var dropdown = $('#dog-breeds')
var breedImage = $('#image');
var allowSubmit = true;

var breed;


$.get("https://dog.ceo/api/breeds/list/all", function(data){
    let dogBreeds = data.message;
    for(let breed in dogBreeds){
        dropdown.append('<option value="' + breed + '" >' + breed + ' </option>');
    }
})

dropdown.change(function(){
    allowSubmit = true;
})

$('#fetch-image').click(function(e){
    e.preventDefault();
    if(allowSubmit){       
        breed = dropdown.val();
        console.log(breed);
        displayDog(breed);
    }
});


$('#next').click(function(e){
    e.preventDefault();
    if(breed !== undefined){
        
        displayDog(breed);
    }
})
function displayDog(breed){

        let url  = "https://dog.ceo/api/breed/" + breed + "/images/random";

        $.get(url, function(data){
            var imageURL = data.message;
            $('#image').attr('src', imageURL);
        });

}