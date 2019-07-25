window.onload= function() {watch()};
function watch() {
    var btn = document.getElementById("btnStop");
    btnDisabled(btn);
}

function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        ranNum = Math.floor(Math.random()*(maximum-minimum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll();

    for(i=0;i<xArray.length;i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) {
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt = txt1 + "Player 2 rolled ["+pTwo+"]<br><br>";
        setTimeout(function() {writeMsg(txt1);}, 1000);
    }

    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function() {txt1 = txt1 + "Player 1 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function() {txt1 = txt1 + "Player 2 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    }

    return first;
}

function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") {
        activePlayer = rollForTurn();
    }
    setTimeout(function() {hideGameMsg();}, 4000);

    var btn = document.getElementById("btnStart");
    btnDisabled(btn);
    var btn = document.getElementById("btnStop");
    stopEnabled(btn);

    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

function btnDisabled(btn) {
    btn.style.color = "fff";
    btn.style.border = "2px solid rgb(153, 1153, 102)";
    btn.style.backgroundColor = "rgb(214, 214, 194)";
    btn.btnDisabled = true;
}

function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51)";
    btn.disabled = false;
}

function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0, 153, 0)";
    btn.style.backgroundColor = "rgb(57, 230, 0)";
    btn.disabled = false;
}

function stopGame() {
	hideGameMsg();
	var btn = document.getElementById('btnStart');
	startEnabled(btn);
	var btn = document.getElementById('btnStop');
	btnDisabled(btn);
	var showPlayer = document.getElementById('showPlayer')
	showPlayer.innerHTML = "Game Stopped";
	showPlayer.style.color='red';
	
	var arrayO = document.getElementsByClassName("O");
	var arrayX = document.getElementsByClassName("X");
	for (var i=0; i<arrayO.length;i++) {
		arrayO[i].style.transform = "translateY(-100%)";
	}
	for (var i=0; i<arrayX.length;i++) {
		arrayX[i].style.transform = "translateY(100%)";
	}

	document.getElementById('boardState').innerHTML = "";
}

function showGameMsg() {
	document.getElementById('gameMsgBox').style.display = 'block';
}

function hideGameMsg() {
	clearMsg();
	document.getElementById('gameMsgBox').style.display = 'none';
}

function writeMsg(txt) {
	showGameMsg();
	document.getElementById('gameMsg').innerHTML = txt;
}

function clearMsg() {
	document.getElementById('gameMsg').innerHTML = "";
}

function saveSettings() {
	var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
	var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
	if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
		alert("Error - Player 1 and Player 2 cannot both be assigned as: "+p1Selected[p1Index].text)
	} else {
		document.getElementById('p1Display').innerHTML=p1Selected[p1Index].text;
		document.getElementById('p2Display').innerHTML=p2Selected[p2Index].text;
	}
}

function getAvatars() {
	var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
	var avatarArray = [p1Avatar,p2Avatar];
	return avatarArray;
}

function determineAvatar() {
	var avatarArray = getAvatars();
	var active = document.getElementById('showPlayer').innerHTML;
	p1Avatar = avatarArray[0];
	p2Avatar = avatarArray[1];
	if (active == "Player 1") { 
		var paintAvatar = p1Avatar;
	} else if (active == "Player 2") {
		var paintAvatar = p2Avatar;
	}
	return paintAvatar;
}

function avatarPlaced() {
	var parseText = document.getElementById('gameMsg').innerHTML;
	var showPlayer = document.getElementById('showPlayer'); 
	
	if (parseText == "That's three in a row, Player 1 wins!" || parseText == "That's three in a row, Player 2 wins!"){
		showPlayer.innerHTML = "Game Stopped";
		showPlayer.style.color='red';
	}
	activePlayer = showPlayer.innerHTML;
	if (activePlayer == "Player 1") {
		showPlayer.innerHTML = "Player 2";
	} else {
		showPlayer.innerHTML = "Player 1";
	}
	check4Tie();
}

function check(info,square) {
	for (var i in info) {
    	var tempInfo = info[i].charAt(0);
        if (tempInfo == square) {
        	return tempInfo;
        }
    }
}

function recordMoves(square) {
	var proposedMove = square;
	var boardState = document.getElementById('boardState').innerHTML;
	var info = boardState.split(',');
	verdict = check(info,square);
	return verdict;
}

function recordMove(currentMove) {
	var target = document.getElementById('boardState');
	var previousMoves = target.innerHTML;
	target.innerHTML = previousMoves+currentMove;
}

function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById("boardState");
    var info = target.innerHTML;
    info = info.substring(1);
    info = info.split(",");
    info.sort();
    for (var i in info) {
        squareArray.push(info[i].charAt(0));
    }

    checkWinCon(info);
	check4Tie();
	
}

function check4Tie() {
    var boardState = document.getElementById("boardState").innerHTML;
    boardState = boardState.substring(1);
    boardState = boardState.split(',');
    var check = document.getElementById("gameMsg").innerHTML;
    if(boardState.length >= 9 && check != "That's three in a row, Player 1 wins!" && 
        check != "That's three in a row, Player 2 wins!") {
            var txt1 = "Oh no! Nobody wins, it was a tie!";
            tieSound();
            writeMsg(txt1);
            setTimeout(function() {stopGame();}, 3000);
        }
}

function winner(winDetected,winCon) {
	if (winDetected == "win") {
		var showme = winDetected;
		var activePlayer = document.getElementById('showPlayer').innerHTML;
		var txt2 = "That's three in a row, "+activePlayer+" wins!";
		writeMsg(txt2);
		var btn = document.getElementById('btnStart');
		startEnabled(btn);
		var btn = document.getElementById('btnStop');
		btnDisabled(btn);
		document.getElementById('showPlayer').innerHTML = "Game Stopped";
		glowBoard(winCon);
	} 
}

function glowBoard(pos) {
	var index0 = pos[0];
	var index1 = pos[1];
	var index2 = pos[2];
	var squares = document.getElementsByClassName('square')
	for (var i=0;i<squares.length;i++){
		if (i == index0) {
			var bg1 = squares[i];
			blink();
			winSound();
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 179, 66)';}, 100);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 238, 66)';}, 200);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(122, 244, 66)';}, 400);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(66, 244, 235)';}, 500);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 179, 66)';}, 600);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(244, 238, 66)';}, 700);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(122, 244, 66)';}, 900);
			setTimeout(function() {bg1.style.backgroundColor = 'rgb(66, 244, 235)';}, 1000);
			setTimeout(function() {bg1.style.backgroundColor = '#d7f3f7';}, 1100);
		} else if (i == index1) {
			var bg2 = squares[i];
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(66, 244, 235)';}, 100);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(122, 244, 66)';}, 200);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 238, 66)';}, 400);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 179, 66)';}, 500);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(66, 244, 235)';}, 600);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(122, 244, 66)';}, 700);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 238, 66)';}, 900);
			setTimeout(function() {bg2.style.backgroundColor = 'rgb(244, 179, 66)';}, 1000);
			setTimeout(function() {bg2.style.backgroundColor = '#d7f3f7';}, 1100);
		} else if (i == index2) {
			var bg3 = squares[i];
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 179, 66)';}, 100);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 238, 66)';}, 200);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(197, 244, 66)';}, 300);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(122, 244, 66)';}, 400);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(66, 244, 235)';}, 500);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 179, 66)';}, 600);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(244, 238, 66)';}, 700);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(197, 244, 66)';}, 800);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(122, 244, 66)';}, 900);
			setTimeout(function() {bg3.style.backgroundColor = 'rgb(66, 244, 235)';}, 1000);
			setTimeout(function() {bg3.style.backgroundColor = '#d7f3f7';}, 1100);
		}
	}
	setTimeout(function() {stopGame();}, 1200);
}

function squareSound() { 
	var sound = document.getElementById("placeAvatar");
    sound.play();
	setTimeout(function() {sound.pause();}, 400);
	setTimeout(function() {sound.currentTime = 0;}, 500);
}
function tieSound() { 
	var sound = document.getElementById("tieGame");
	var check = document.getElementById('gameMsg').innerHTML;
    setTimeout(function() {sound.play();}, 500);
}
function winSound() { 
	var sound = document.getElementById("winGame");
	setTimeout(function() {sound.play();}, 500);
	setTimeout(function() {sound.pause();}, 2700);
	setTimeout(function() {sound.currentTime = 0;}, 2800);
}
function diceRoll() { 
	var sound = document.getElementById("diceRoll");
	sound.play();
}

function blink() {
	var body = document.getElementById('body');
	setTimeout(function() {body.style.backgroundColor = '#94f7ed';}, 100);
	setTimeout(function() {body.style.backgroundColor = '#94cef7';}, 200);
	setTimeout(function() {body.style.backgroundColor = '#94a6f7';}, 300);
	setTimeout(function() {body.style.backgroundColor = '#b094f7';}, 400);
	setTimeout(function() {body.style.backgroundColor = '#cc94f7';}, 500);
	setTimeout(function() {body.style.backgroundColor = '#e894f7';}, 600);
	setTimeout(function() {body.style.backgroundColor = '#f794d9';}, 700);
	setTimeout(function() {body.style.backgroundColor = '#f73881';}, 800);
	setTimeout(function() {body.style.backgroundColor = '#c6034e';}, 900);
	setTimeout(function() {body.style.backgroundColor = '#e00202';}, 1000);
	setTimeout(function() {body.style.backgroundColor = '#ffffff';}, 1100);
}

function checkWinCon(info) {
	var winDetected = "on";
	console.log(info);
	if ( (info.includes("0X") && info.includes("1X") && info.includes("2X")) 
		|| (info.includes("0O") && info.includes("1O") && info.includes("2O")) ) {
		var winCon1 = [0,1,2];
		winDetected = "win";
		console.log("1");
		winner(winDetected,winCon1);
		return;
	}
	if ( (info.includes("3X") && info.includes("4X") && info.includes("5X")) 
		|| (info.includes("3O") && info.includes("4O") && info.includes("5O")) ) {
		var winCon2 = [3,4,5];
		winDetected = "win";
		console.log("2");
		winner(winDetected,winCon2);
		return;
	}
	if ( (info.includes("6X") && info.includes("7X") && info.includes("8X")) 
		|| (info.includes("6O") && info.includes("7O") && info.includes("8O")) ) {
		var winCon3 = [6,7,8];
		winDetected = "win";
		console.log("3");
		winner(winDetected,winCon3);
		return;
	}
	if ( (info.includes("0X") && info.includes("3X") && info.includes("6X")) 
		|| (info.includes("0O") && info.includes("3O") && info.includes("6O")) ) {
		var winCon4 = [0,3,6];
		winDetected = "win";
		console.log("4");
		winner(winDetected,winCon4);
		return;
	}
	if ( (info.includes("1X") && info.includes("4X") && info.includes("7X")) 
		|| (info.includes("1O") && info.includes("4O") && info.includes("7O")) ) {
		var winCon5 = [1,4,7];
		winDetected = "win";
		console.log("5");
		winner(winDetected,winCon5);
		return;
	}
	if ( (info.includes("2X") && info.includes("5X") && info.includes("8X")) 
		|| (info.includes("2O") && info.includes("5O") && info.includes("8O")) ) {
		var winCon6 = [2,5,8];
		winDetected = "win";
		console.log("6");
		winner(winDetected,winCon6);
		return;
	}
	if ( (info.includes("2X") && info.includes("4X") && info.includes("6X")) 
		|| (info.includes("2O") && info.includes("4O") && info.includes("6O")) ) {
		var winCon7 = [2,4,6];
		winDetected = "win";
		console.log("7");
		winner(winDetected,winCon7);
		return;
	}
	if ( (info.includes("0X") && info.includes("4X") && info.includes("8X")) 
		|| (info.includes("0O") && info.includes("4O") && info.includes("8O")) ) {
		var winCon8 = [0,4,8];
		winDetected = "win";
		console.log("8");
		winner(winDetected,winCon1);
		return;
	}

}

function squareAnimate() {
	var activePlayer = document.getElementById('showPlayer').innerHTML;
	if (activePlayer != "Game Stopped") {
		var element = event.target.id;
		var square = document.getElementById(element).getAttribute("data-square");
		console.log(square);
		var verdict = recordMoves(square);
		if (verdict == undefined) { 
			var paintAvatar = determineAvatar();
			var selected = document.getElementsByClassName(paintAvatar)[square]; 
			if (paintAvatar == "O") {
				animateO(selected);
			} else if (paintAvatar == "X") {
				animateX(selected);
			}
			var currentMove = ","+square+paintAvatar;
			recordMove(currentMove);
			checkForWinCon();
			avatarPlaced(square,paintAvatar);
			squareSound();
		}
	}
}

function animateO(selected) {
	selected.style.transform = (selected.style.transform == "translateY(0%)" || null) ? "translateY(0%)" : "translateY(0%)";
}

function animateX(selected) {
	selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translateY(0%)" : "translateY(-100%)";
}