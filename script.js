document.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;
    
    class Game {
        constructor(){
            this.enemies = [];
        }
        update(){
    
        }  
        draw(){
    
        }
        #addNewEnemy(){
    
        }
    }

    class Enemy {
        constructor(){

        }
        update(){
    
        }
        draw(){
    
        }
    }

    let lastTime= 1;
   function animate(timestamp){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        console.log('deltaTime: ' + deltaTime,deltaTime);

        requestAnimationFrame(animate);
    }
    animate();
})