    
$(document).ready(function() {
    $('.start').click(function(event) {
let rooms  = [[13,14,15,16],[12,11,10,9],[5,6,7,8],[4,3,2,1]];
let entry_point = rooms[3][3]
//console.log(entry_point);
//Making the Exit Po
//console.log(5);

let exit_point = Math.ceil(Math.random() * ( 16 - 12 ) + 12);
//console.log(exit_point);


//Making the death rooms
let Death_rooms = [];
Death_rooms[0] = Math.ceil(Math.random() * ( 12 - 4 ) + 4);
Death_rooms[1] = Math.ceil(Math.random()* ( 12 - 4 ) + 4);
//console.log(1);
//Checking if the Death rooms are same or not
while(Death_rooms[1]==Death_rooms[0]){
    Death_rooms[1] = Math.ceil(Math.random()* ( 12 - 4 ) + 4);
}
//console.log(Death_rooms);
//console.log('checking');
let alive = true;
let room = 0;
let next_room = [];
let winner = false;
console.log('The Death game has started Escape your Death');
console.log('You are in Room 1');
let choose = entry_point;
while(alive){ 
    
   switch(choose){
        case 1: console.log('You have two option to pick either Room 2 or Room 8');
                choose = parseInt(prompt());
                next_room = [2,8];
                if(next_room.indexOf(choose) === -1){
                    room = 1;
                    choose = 0;
                }
                continue;
                
        case 2: console.log('You are in Room 2');
                console.log('You have option to pick either Room 3 or Room 7 or Room 1');
                next_room = [];
                choose = parseInt(prompt());
                next_room = [3,7,1];
                if(next_room.indexOf(choose) === -1){
                    room = 2;
                    choose = 0;
                }
                continue;

        case 3: console.log('You are in Room 3');
                console.log('You have option to pick either Room 4 or Room 6 Room 2');
                next_room = [];
                choose = parseInt(prompt());
                next_room = [4,6,2];
                if(next_room.indexOf(choose) === -1){
                    room = 3;
                    choose = 0;
                }
                continue;

        case 4: console.log('You are in Room 4');
                console.log('You have option to pick either Room 5 or Room 3');
                next_room = [];
                choose = parseInt(prompt());
                next_room = [5,3];
                if(next_room.indexOf(choose) === -1){
                    room = 4;
                    choose = 0;
                }
                continue;

        case 5: if((Death_rooms[0]==choose)||(Death_rooms[1]==choose)){
                console.log('You are in Room 5 the Room of Death');
                alive = false;
                break;
        }
            else{
            console.log('You are in Room 5');
            console.log('You have option to pick either Room 12 or Room 6 or Room 4');
            next_room = [];
            choose = parseInt(prompt());
            next_room = [12,6,4];
                if(next_room.indexOf(choose) === -1){
                    room = 5;
                    choose = 0;
                }
            }
            continue;

        case 6: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 6 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 6');
            console.log('You have option to pick either Room 7 or Room 11 or Room 3 or Room 5');
            next_room = [];
            choose = parseInt(prompt());
            next_room = [7,11,3,5];
                if(next_room.indexOf(choose) === -1){
                    room = 6;
                    choose = 0;
                }
        }
            continue;

        case 7: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 7 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 7');
            console.log('You have option to pick either Room 8 or Room 10 or Room 2 or Room 6');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [8,10,2,6];
                if(next_room.indexOf(choose) === -1){
                    room = 7;
                    choose = 0;
                }
        }
            continue;

        case 8: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 8 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 8');
            console.log('You have option to pick either Room 9 or Room 7 or Room 1');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [9,7,1];
                if(next_room.indexOf(choose) === -1){
                    room = 8;
                    choose = 0;
                }
        }
            continue;

        case 9: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 9 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 9');
            console.log('You have option to pick either Room 16 or Room 10 or you can Room 8');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [16,10,8];
                if(next_room.indexOf(choose) === -1){
                    room = 9;
                    choose = 0;
                }
        }
            continue;

        case 10: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 10 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 10');
            console.log('You have option to pick either Room 11 or Room 15 or Room 7 or Room 9');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [11,15,7,9];
                if(next_room.indexOf(choose) === -1){
                    room = 10;
                    choose = 0;
                }
        }
            continue;

        case 11: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 11 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 11');
            console.log('You have two option to pick either Room 14 or Room 12 or Room 10 or Room 6');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [14,12,10,6];
                if(next_room.indexOf(choose) === -1){
                    room = 11;
                    choose = 0;
                }
        }
            continue;

        case 12: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 12 the Room of Death');
            alive = false;
            break;
    }
            else{
            console.log('You are in Room 12');
            console.log('You have option to pick either Room 13 or Room 11 or Room 5');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [13,11,5];
                if(next_room.indexOf(choose) === -1){
                    room = 12;
                    choose = 0;
                }
        }
            continue;

        case 13: if(choose!=exit_point){
            console.log('You are in Room 13');
            console.log('You have option to pick either Room 14 or Room 12');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [14,12];
                if(next_room.indexOf(choose) === -1){
                    room = 13;
                    choose = 0;
                }
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 14: if(choose!=exit_point){
            console.log('You are in Room 14');
            console.log('You have option to pick either Room 15 or Room 13 or Room 11');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [15,13,11];
                if(next_room.indexOf(choose) === -1){
                    room = 14;
                    choose = 0;
                }
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 15: if(choose!=exit_point){
            console.log('You are in Room 15');
            console.log('You have option to pick either Room 16 or Room 14 or Room 10');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [16,14,10];
                if(next_room.indexOf(choose) === -1){
                    room = 15;
                    choose = 0;
                }
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 16: if(choose!=exit_point){
            console.log('You are in Room 16');
            console.log('You have option to pick either Room 9 or Room 15');
            next_room = [];
                choose = parseInt(prompt());
                next_room = [9,15];
                if(next_room.indexOf(choose) === -1){
                    room = 16;
                    choose = 0;
                }
        }
        else{
            winner = true;
            break;
        }
            continue;
        default: console.log('This room is locked!, try from the options');
                next_room = [];
                choose = room;
        continue;
    }
    
    if(winner){
        console.log('Later NERDS!','HAHAHAHAHAHAHAHAHAHAHA A LOUD SCARY LAUGH');
        break;
    }
    else if(!alive){
        console.log('Dead! ^vvv^','SLASH! SLASH! SLASH! SLASH!');
        break;
    }

}



    });
});
