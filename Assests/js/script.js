document.addEventListener("DOMContentLoaded",()=>
{
    const cells = document.querySelectorAll('.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9,.c10,.c11,.c12,.c13,.c14,.c15,.c16,.c17,.c18,.c19,.c20');
    const emojis = ["😀", "😂", "😍", "🥳", "😎", "🤔", "🤣", "😜", "😘", "😁"];
    // all 20 cells --- 20 emojis
    const emojiArray = [];
    let turns = 50;
    let matches = 0;
    document.getElementById("matche").innerHTML = matches;
    document.getElementById("turns").innerHTML = turns;

    emojis.forEach(emoji => {
        emojiArray.push(emoji, emoji);
    });

    // shuffle the array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(emojiArray);
    
    let first = null;
    let index1 = null;
    let cel1 = null;
    cells.forEach((cell,index) =>
    {
        
        cell.addEventListener('click',()=>
        {
           
           var p = cell.querySelector('p');
            if(!p.textContent)
            {
                turns--;
                if(turns<=0)
                    {
                       
                        const out = document.getElementById("board");
                        out.innerHTML="Gameover";
                        out.classList.remove("board");
                        out.classList.add("out");
                        matches = 0;
                        turns = 50;
                        document.getElementById("matche").innerHTML = matches;
                        document.getElementById("turns").innerHTML = turns;
                       
                    }  
                document.getElementById("turns").innerHTML = turns;
                let emmoji =  emojiArray[index];
                 p.textContent = emmoji;
                p.classList.add("emoji");
                if(first == null)
                {
                   
                    cel1 = cell;
                    first = emmoji;
                    index1 = index;
                    
                    
                }
                else 
                {
                    
                    let emmoji =  emojiArray[index];
                    p.textContent = emmoji;
                    p.classList.add("emoji"); 
                     if(emojiArray[index1]== emojiArray[index])
                    {
                        
                        first = null;
                        cel1 = null;
                        matches++;
                        document.getElementById("matche").innerHTML = matches;
                        if(matches == 10 && turns >= 0)
                        {
                            matches = 0;
                            turns = 50;
                            const success = document.getElementById("board");
                            success.innerHTML="Sucess";
                            success.classList.remove("board");
                            success.classList.add("success");
                        }

                    }
                    else{
                        
                         setTimeout(() => {
                            p.textContent = "";
                            p.classList.remove("emoji");
                            const pp = cel1.querySelector('p');
                            pp.textContent = "";
                            pp.classList.remove("emoji");
                            first = null;
                            cel1 = null;
                        }, 1000);
                           
                    }
                }
                
                

            }
           
        }
        )
       
    })

})
document.addEventListener("DOMContentLoaded", () => {
    
    const backgroundMusic = document.getElementById('background-music');
    const musicOnIcon = document.querySelector('.music-on');
    const musicOffIcon = document.querySelector('.music-off');
    
    function toggleMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            backgroundMusic.muted = false;
            musicOnIcon.classList.remove('hidden');
            musicOffIcon.classList.add('hidden');
            localStorage.setItem('musicPlaying', 'true');
        } else {
            backgroundMusic.pause();
            musicOnIcon.classList.add('hidden');
            musicOffIcon.classList.remove('hidden');
            localStorage.setItem('musicPlaying', 'false');
        }
    }
    
    function playMusic() {
        const musicPlaying = localStorage.getItem('musicPlaying');
        if (musicPlaying === 'false') {
            backgroundMusic.pause();
            musicOnIcon.classList.add('hidden');
            musicOffIcon.classList.remove('hidden');
        } else {
            backgroundMusic.play().then(() => {
                musicOnIcon.classList.remove('hidden');
                musicOffIcon.classList.add('hidden');
                backgroundMusic.muted = false;
            }).catch((error) => {
                console.log('Autoplay was prevented:', error);
            });
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        playMusic();
    });
    
    document.body.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            backgroundMusic.muted = false;
        }
    }, { once: true });

    // Attach the toggleMusic function to the music-toggle element
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }

});
