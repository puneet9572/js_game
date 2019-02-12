let rooms  = [[13,14,15,16],[12,11,10,9],[5,6,7,8],[4,3,2,1]];
let entry_point = rooms[3][3]
//console.log(entry_point);
//Making the Exit Point
let exit_point = Math.ceil(Math.random() * ( 16 - 12 ) + 12);
//console.log(exit_point);


//Making the death rooms
let Death_rooms = [];
Death_rooms[0] = Math.ceil(Math.random() * ( 12 - 4 ) + 4);
Death_rooms[1] = Math.ceil(Math.random()* ( 12 - 4 ) + 4);

//Checking if the Death rooms are same or not
while(Death_rooms[1]==Death_rooms[0]){
    Death_rooms[1] = Math.ceil(Math.random()* ( 12 - 4 ) + 4);
}
//console.log('checking');
let alive = true;
// let choose = 1
let winner = false;
console.log('The Death game has started Escape your Death');
let choose = 1;
while(alive){
    let choose = prompt();
    choose = parseInt(choose);

   switch(choose){
        case 1: console.log('You are in Room 1');
                console.log('You have two option to pick either Room 2 or Room 8');
                continue;
        case 2: console.log('You are in Room 2');
                console.log('You have option to pick either Room 3 or Room 7 or Room 1');
                continue;
        case 3: console.log('You are in Room 3');
                console.log('You have option to pick either Room 4 or Room 6 Room 2');
                continue;
        case 4: console.log('You are in Room 4');
                console.log('You have option to pick either Room 5 or Room 3');
                continue;
        case 5: if((Death_rooms[0]==choose)||(Death_rooms[1]==choose)){
                console.log('You are in Room 5 the Room of Death');
                alive = false;
                break;
        }
            else{
            console.log('You are in Room 5');
            console.log('You have option to pick either Room 12 or Room 6 or Room 4');
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
        }
            continue;
        case 10: if(Death_rooms[0]==choose||Death_rooms[1]==choose){
            console.log('You are in Room 10 the Room of Death');
            alive = false;
            break;
    }
        else{
        console.log('You are in Room 5');
        console.log('You have option to pick either Room 11 or Room 15 or you can go back to Room 7 or Room 9');
        room = rooms[2][0];
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
        }
            continue;
        case 13: if(choose!=exit_point){
            console.log('You are in Room 13');
            console.log('You have option to pick either Room 14 or Room 12');
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 14: if(choose!=exit_point){
            console.log('You are in Room 14');
            console.log('You have option to pick either Room 15 or Room 13 or Room 11');
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 15: if(choose!=exit_point){
            console.log('You are in Room 15');
            console.log('You have option to pick either Room 16 or Room 14 or Room 10');
        }
        else{
            winner = true;
            break;
        }
            continue;
        case 16: if(choose!=exit_point){
            console.log('You are in Room 16');
            console.log('You have option to pick either Room 9 or Room 15');
        }
        else{
            winner = true;
            break;
        }
            continue;
        default: console.log('choose the right Room To go');
        continue;
    }
    if(winner){
        console.log('Escaped yor Death!');
        break;
    }
    else if(!alive){
        console.log('Dead! ^v^');
        break;
    }

}


