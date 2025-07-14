class Magazine extends Item {
  constructor(id, name, ground_pic, inv_pic, inv_w, inv_h, weight, capacity, ammo_type, reload_time) {
    super(id, name, ground_pic, false, 1, inv_pic, inv_w, inv_h, weight, false, null);
    this.capacity = capacity;
    this.ammo_type = ammo_type;
    this.reload_time = reload_time;

    this.ammo = []; // array of Ammo objects or ids
  }

  addAmmo(ammo) {
    if (this.ammo.length < this.capacity && ammo.ammo_type === this.ammo_type) {
      this.ammo.push(ammo.id); // or ammo itself, depends how you track inventory
      return true;
    }
    return false;
  }

  removeAmmo() {
    return this.ammo.pop();
  }

  get ammo_left() {
    return this.ammo.length;
  }
}
