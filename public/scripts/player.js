class Player {
	constructor(x, y, max_health, max_stamina) {
		this.x = x;
		this.y = y;
		
		this.max_health = max_health;
		this.health = max_health;
		
		this.max_stamina = max_stamina;
		this.stamina = max_stamina;
		
		this.speed = 3;
		this.current_gun = null;

		this.direction = 0;
	}

	move(dx, dy) {
    this.x += dx * this.speed;
    this.y += dy * this.speed;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  heal(amount) {
    this.health += amount;
    if (this.health > this.max_health) this.health = this.max_health;
  }

  update() {
    if (this.stamina < this.max_stamina) {
      this.stamina += 1;
      if (this.stamina > this.max_stamina) this.stamina = this.max_stamina;
    }
	}

  render() {
    fill(255);
    ellipse(this.x, this.y, 30, 30);
  }
}
