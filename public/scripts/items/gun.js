class Gun extends Item {
  constructor(id, name, ground_pic, inv_pic, inv_w, inv_h, weight, fire_rate, supported_ammo_type) {
    super(id, name, ground_pic, false, 1, inv_pic, inv_w, inv_h, weight, true, 100);
    this.fire_rate = fire_rate; // rounds per minute
    this.supported_ammo_type = supported_ammo_type; // like AmmoTypes._545x39

    this.current_mag_id = null; // id of mag inserted
    this.last_shot_time = 0;
    this.is_reloading = false;
    this.reload_start_time = 0;
  }

  insertMag(mag) {
    if (mag.ammo_type === this.supported_ammo_type) {
      this.current_mag_id = mag.id;
      return true;
    }
    return false; // wrong ammo type
  }

  removeMag() {
    const old = this.current_mag_id;
    this.current_mag_id = null;
    return old;
  }

  canFire(now) {
    // check fire rate cooldown
    return (now - this.last_shot_time) >= (60000 / this.fire_rate);
  }

  fire(now, magObj, ammoList) {
    if (!this.current_mag_id || !magObj) return null;
    if (!this.canFire(now)) return null;
    if (magObj.ammo_left === 0) return null;

    // take last bullet id off mag
    const ammo_id = magObj.removeAmmo();
    if (!ammo_id) return null;

    this.last_shot_time = now;

    // find ammo object (depends how you store ammo)
    const ammo = ammoList.find(a => a.id === ammo_id);
    return ammo;
  }

  startReload(now) {
    this.is_reloading = true;
    this.reload_start_time = now;
  }

  finishReload(now, newMag) {
    if (!this.is_reloading) return false;
    if ((now - this.reload_start_time) >= (newMag.reload_time * 1000)) {
      this.current_mag_id = newMag.id;
      this.is_reloading = false;
      return true;
    }
    return false; // still reloading
  }
}
