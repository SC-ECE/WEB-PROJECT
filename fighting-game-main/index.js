const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Background({
	position: {
		x: 0,
		y: 0
	},
	imageSrc: './data/background.png'
})

const shop = new Background({
	position: {
		x: 625,
		y: 127
	},
	imageSrc: './data/shop.png',
	scale: 2.75,
	framesMax: 6
})

const player = new Characters({
	position: {
		x: 100,
		y: 0
	},
	velocity: {
		x: 0,
		y: 0
	},
	offset: {
		x: 0,
		y: 0
	},
	imageSrc: './data/samuraiMack/Idle.png',
	framesMax: 8,
	scale: 2.5,
	offset: {
		x: 215,
		y: 152
	},
	sprites: {
		idle: {
			imageSrc: './data/samuraiMack/Idle.png',
			framesMax: 8
		},
		run: {
			imageSrc: './data/samuraiMack/Run.png',
			framesMax: 8
		},
		jump: {
			imageSrc: './data/samuraiMack/Jump.png',
			framesMax: 2
		},
		fall: {
			imageSrc: './data/samuraiMack/Fall.png',
			framesMax: 2
		},
		attack1: {
			imageSrc: './data/samuraiMack/Attack1.png',
			framesMax: 6
		},
		takeHit: {
			imageSrc: './data/samuraiMack/Take hit.png',
			framesMax: 4
		},
		death: {
			imageSrc: './data/samuraiMack/Death.png',
			framesMax: 6
		}
	},
	attackBox: {
		offset: {
			x: 100,
			y: 50
		},
		width: 157,
		height: 50
	}
})

const enemy = new Characters({
	position: {
		x: 876,
		y: 0
	},
	velocity: {
		x: 0,
		y: 0
	},
	offset: {
		x: -50,
		y: 0
	},
	imageSrc: './data/kenji/Idle.png',
	framesMax: 8,
	scale: 2.5,
	offset: {
		x: 215,
		y: 167
	},
	sprites: {
		idle: {
			imageSrc: './data/kenji/Idle.png',
			framesMax: 4
		},
		run: {
			imageSrc: './data/kenji/Run.png',
			framesMax: 8
		},
		jump: {
			imageSrc: './data/kenji/Jump.png',
			framesMax: 2
		},
		fall: {
			imageSrc: './data/kenji/Fall.png',
			framesMax: 2
		},
		attack1: {
			imageSrc: './data/kenji/Attack1.png',
			framesMax: 4
		},
		takeHit: {
			imageSrc: './data/kenji/Take hit.png',
			framesMax: 3
		},
		death: {
			imageSrc: './data/kenji/Death.png',
			framesMax: 7
		}
	},
	attackBox: {
		offset: {
			x: -173,
			y: 50
		},
		width: 160,
		height: 50
	}
})

const keys = {
	a: {
		pressed: false
	},
	d: {
		pressed: false
	},
	ArrowLeft: {
		pressed: false
	},
	ArrowRight: {
		pressed: false
	}
}

decreaseTimer()

function animate() {
	window.requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0, 0, canvas.width, canvas.height)
	background.update()
	shop.update()
	c.fillStyle = 'rgba(255, 255, 255, 0.162)'
	c.fillRect(0, 0, canvas.width, canvas.height)
	player.update()
	enemy.update()

	player.velocity.x = 0
	enemy.velocity.x = 0

	//player movement
	if(keys.a.pressed && player.lastKey === 'a') {
		player.velocity.x = -5
		player.switchSprite('run')
	}
	else if(keys.d.pressed && player.lastKey === 'd') {
		player.velocity.x = 5
		player.switchSprite('run')
	}
	else {
		player.switchSprite('idle')
	}

	//player jump
	if(player.velocity.y < 0) {
		player.switchSprite('jump')
	}
	else if(player.velocity.y > 0) {
		player.switchSprite('fall')
	}

	//enemy movement
	if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
		enemy.velocity.x = -5
		enemy.switchSprite('run')
	}
	else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
		enemy.velocity.x = 5
		enemy.switchSprite('run')
	}
	else {
		enemy.switchSprite('idle')
	}

	//enemy jump
	if(enemy.velocity.y < 0) {
		enemy.switchSprite('jump')
	}
	else if(enemy.velocity.y > 0) {
		enemy.switchSprite('fall')
	}

	//player attack & enemy hit
	if(rectangularCollision({
		rectangle1: player,
		rectangle2: enemy
		}) && 
		player.isAttacking &&
		player.framesCurrent === 4) {
		enemy.takeHit()
		player.isAttacking = false
		gsap.to('#enemyHealth', {
			width: enemy.health + '%'
		})
	}

	//player miss
	if(player.isAttacking && player.framesCurrent === 4) {
		player.isAttacking = false
	}

	//enemy attack
	if(rectangularCollision({
		rectangle1: enemy,
		rectangle2: player
		}) && 
		enemy.isAttacking &&
		enemy.framesCurrent === 2) {
		player.takeHit()
		enemy.isAttacking = false
		gsap.to('#playerHealth', {
			width: player.health + '%'
		})
	}

	//enemy miss
	if(enemy.isAttacking && enemy.framesCurrent === 2) {
		enemy.isAttacking = false
	}

	//end game on health
	if(enemy.health <= 0 || player.health <= 0) {
		determineWinner({ player, enemy, timerID })
	}
}

animate()

window.addEventListener('keydown', (event) => {

	//player keys
	if(!player.dead) {
		switch (event.key) {
			case 'd':
				keys.d.pressed = true
				player.lastKey = 'd'
				break
			case 'a':
				keys.a.pressed = true
				player.lastKey = 'a'
				break
			case 'w':
				player.velocity.y = -20
				break
			case ' ':
				player.attack()
				break
		}
	}

	//enemy keys
	if(!enemy.dead) {
		switch (event.key) {
			case 'ArrowRight':
				keys.ArrowRight.pressed = true
				enemy.lastKey = 'ArrowRight'
				break
			case 'ArrowLeft':
				keys.ArrowLeft.pressed = true
				enemy.lastKey = 'ArrowLeft'
				break
			case 'ArrowUp':
				enemy.velocity.y = -20
				break
			case 'Control':
				enemy.attack()
				break
		}
	}
})

window.addEventListener('keyup', (event) => {

	//player keys
	switch (event.key) {
		case 'd':
			keys.d.pressed = false
			break
		case 'a':
			keys.a.pressed = false
			break
	}

	//enemy keys
	switch (event.key) {
		case 'ArrowRight':
			keys.ArrowRight.pressed = false
			break
		case 'ArrowLeft':
			keys.ArrowLeft.pressed = false
			break
	}
})