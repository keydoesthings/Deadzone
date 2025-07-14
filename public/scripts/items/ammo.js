class Ammo extends Item {
  constructor(id, name, ground_pic, inv_pic, inv_w, inv_h, weight, damage, penetration, ammo_type) {
    super(id, name, ground_pic, true, 60, inv_pic, inv_w, inv_h, weight, false, null);
    this.damage = damage;
    this.penetration = penetration;
    this.ammo_type = ammo_type;
  }
}
