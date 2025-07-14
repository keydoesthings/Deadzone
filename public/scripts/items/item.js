class Item {
  constructor(id, name, ground_pic, stackable, max_stack, inv_pic, inv_w, inv_h, weight, breakable, max_durability) {
    this.id = id;
    this.name = name;

    this.ground_pic = ground_pic; // sprite shown on ground
    this.inv_pic = inv_pic;       // sprite in inventory

    this.stackable = stackable;
    this.max_stack = stackable ? max_stack : 1;

    this.inv_w = inv_w;
    this.inv_h = inv_h;
    this.weight = weight;

    this.breakable = breakable;
    this.max_durability = breakable ? max_durability : null;
    this.durability = breakable ? max_durability : null;
  }

  damage(amount) {
    if (this.breakable && this.durability !== null) {
      this.durability -= amount;
      if (this.durability < 0) this.durability = 0;
    }
  }

  repair(amount) {
    if (this.breakable && this.durability !== null) {
      this.durability += amount;
      if (this.durability > this.max_durability)
        this.durability = this.max_durability;
    }
  }
}
