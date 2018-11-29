class Blob {
	/**
	 * @param {HTMLCanvasElement} canvasEl
	 */
	constructor(canvasEl, width, height) {
		canvasEl.width = width
		canvasEl.height = height
		this.ctx = canvasEl.getContext('2d')
		this.width = width
		this.height = height

		this.frequency = 20
	}

	/**
	 * 
	 * @param {number} fps
	 */
	run(fps = 60) {
		this.intervalTimer = setInterval(this.next.bind(this), 1 / fps)
	}

	stop() {
		if (this.intervalTimer) {
			clearInterval(this.intervalTimer)
		}
	}

	next() {
		this.update()
		this.draw()
	}

	update() {
		this.frequency += 0.1
		this.sine = 20 * Math.sin(this.frequency / 20)
	}

	draw() {
		this.ctx.fillStyle = 'red'
		this.ctx.fillRect(0, 0, this.width, this.height)
		
		this.ctx.beginPath()
		this.ctx.moveTo(100, 116)
		this.ctx.bezierCurveTo(222 + this.sine, 9 + this.sine, 318 + this.sine, 39 + this.sine, 361, 98)
		this.ctx.bezierCurveTo(416 + this.sine, 173 + this.sine, 414 + this.sine, 178 + this.sine, 372, 264)
		this.ctx.bezierCurveTo(340 + this.sine, 329 + this.sine, 335 + this.sine, 335 + this.sine, 241, 389)
		this.ctx.bezierCurveTo(176 + this.sine, 426 + this.sine, 118 + this.sine, 390 + this.sine, 96, 247)
		// this.ctx.bezierCurveTo(50, 100, 155, 50, 155, 116)
		// this.ctx.bezierCurveTo(277, 9, 373, 39, 416, 98)
		this.ctx.closePath()
		this.ctx.stroke()
	}
}

const canvasEl = document.getElementById('canvas')
const blob = new Blob(canvasEl, 400, 400)
blob.run()
