

   document.addEventListener("keydown", function(event) {
    if (event.key == "A" || event.key == "S" || event.key == "D"|| event.key == "F" || event.key == "G" || event.key == "H" || event.key == "J") {
        
        let codeLetter = String(event.key);
        let audio = document.createElement("AUDIO");
        audio.src = `white_keys/${event.key}.mp3`
        audio.play();
        console.log(`The '${codeLetter}' key is pressed`);
        
    }
    else if ((event.key == "a" || event.key == "s" || event.key == "d"|| event.key == "f" || event.key == "g" || event.key == "h" || event.key == "j")) {
        let codeLetter = String(event.key);
        let audio = document.createElement("AUDIO");
        audio.src = `white_keys/${event.key}.mp3`
        audio.play();
        console.log(`The '${codeLetter}' key is pressed`);
    }
    else if ((event.key == "W" || event.key == "E" || event.key == "T"|| event.key == "Y" || event.key == "U")) {
        let codeLetter = String(event.key);
        let audio = document.createElement("AUDIO");
        audio.src = `black_keys/${event.key}.mp3`
        audio.play();
        console.log(`The '${codeLetter}' key is pressed`);
    }
    
    else if ((event.key == "w" || event.key == "e" || event.key == "t"|| event.key == "y" || event.key == "u")) {
        let codeLetter = String(event.key);
        let audio = document.createElement("AUDIO");
        audio.src = `black_keys/${event.key}.mp3`
        audio.play();
        console.log(`The '${codeLetter}' key is pressed`);
    }


    else {
       console.log("Wrong key was pressed");
    }
});



